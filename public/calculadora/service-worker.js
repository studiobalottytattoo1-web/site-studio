/* Service Worker — Quanto eu devo cobrar?
 * Controla somente a pasta /site-studio/calculadora/ (o registro usa esse escopo).
 * Para publicar uma nova versão: aumente VERSAO. Os usuários recebem o aviso "Atualizar".
 */
const VERSAO = '5.0.0';
const CACHE = 'calculadora-v' + VERSAO;
const PASTA = new URL('./', self.location).pathname; // /site-studio/calculadora/

const ARQUIVOS_ESSENCIAIS = [
  './',
  './index.html',
  './css/app.css',
  './js/calc.js',
  './js/pwa.js',
  './vendor/bootstrap.min.css',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Instalação: guarda os arquivos essenciais. Não ativa sozinho, para o usuário escolher quando atualizar.
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ARQUIVOS_ESSENCIAIS)));
});

// A página envia SKIP_WAITING quando o usuário toca em "Atualizar".
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Ativação: apaga caches antigos desta calculadora e assume o controle das abas abertas.
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const chaves = await caches.keys();
    await Promise.all(
      chaves.filter((k) => k.startsWith('calculadora-v') && k !== CACHE).map((k) => caches.delete(k))
    );
    await self.clients.claim();
  })());
});

function ehDaCalculadora(url) {
  return url.origin === self.location.origin && url.pathname.startsWith(PASTA);
}

// Páginas: tenta a internet primeiro (pega a versão nova) e usa o cache se estiver offline.
async function paginaComRede(request) {
  const cache = await caches.open(CACHE);
  try {
    const resposta = await fetch(request);
    if (resposta.ok) cache.put(PASTA + 'index.html', resposta.clone());
    return resposta;
  } catch (erro) {
    return (await caches.match(PASTA + 'index.html')) || (await caches.match(request, { ignoreSearch: true })) || Response.error();
  }
}

// Arquivos (CSS, JS, ícones): usa o cache primeiro e guarda os que faltarem.
async function arquivoComCache(request) {
  const emCache = await caches.match(request, { ignoreSearch: true });
  if (emCache) return emCache;
  const resposta = await fetch(request);
  if (resposta.ok) {
    const cache = await caches.open(CACHE);
    cache.put(request, resposta.clone());
  }
  return resposta;
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  // Fora da pasta da calculadora, o Service Worker não interfere.
  if (!ehDaCalculadora(url)) return;

  if (request.mode === 'navigate') {
    event.respondWith(paginaComRede(request));
  } else {
    event.respondWith(arquivoComCache(request));
  }
});
