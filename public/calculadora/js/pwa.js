/* Instalação, funcionamento offline e atualização — Quanto eu devo cobrar? */
(function () {
  'use strict';

  const $ = (id) => document.getElementById(id);
  const temSW = 'serviceWorker' in navigator;
  let promptInstalar = null;
  let recarregarNaTroca = false;
  const tinhaControleAntes = temSW && !!navigator.serviceWorker.controller;

  function lembrar(chave, valor) { try { localStorage.setItem(chave, valor); } catch (e) {} }
  function lembrado(chave) { try { return localStorage.getItem(chave); } catch (e) { return null; } }

  // ---------- Atualização ----------
  function mostrarAtualizacao(reg) {
    const banner = $('bannerAtualizar');
    if (!banner) return;
    banner.classList.remove('hidden');
    $('btnAtualizar').onclick = () => {
      if (reg.waiting) reg.waiting.postMessage({ type: 'SKIP_WAITING' });
    };
  }

  // ---------- Instalação ----------
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    promptInstalar = e;
    const btn = $('btnInstalar');
    if (btn) btn.classList.remove('hidden');
  });

  if ($('btnInstalar')) {
    $('btnInstalar').addEventListener('click', async () => {
      if (!promptInstalar) return;
      promptInstalar.prompt();
      try { await promptInstalar.userChoice; } catch (e) {}
      promptInstalar = null;
      $('btnInstalar').classList.add('hidden');
    });
  }

  window.addEventListener('appinstalled', () => {
    promptInstalar = null;
    const btn = $('btnInstalar');
    if (btn) btn.classList.add('hidden');
  });

  // iPhone/iPad não têm o botão de instalar: mostramos o passo a passo do Safari.
  const ehIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  const jaInstalado = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  if (ehIOS && !jaInstalado && lembrado('calc-iphone-ok') !== '1') {
    $('cardIphone').classList.remove('hidden');
  }
  if ($('fecharIphone')) {
    $('fecharIphone').addEventListener('click', () => {
      $('cardIphone').classList.add('hidden');
      lembrar('calc-iphone-ok', '1');
    });
  }

  // ---------- Service Worker ----------
  if (temSW) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js', { scope: './' }).then((reg) => {
        if (reg.waiting && tinhaControleAntes) mostrarAtualizacao(reg);

        reg.addEventListener('updatefound', () => {
          const novo = reg.installing;
          if (!novo) return;
          novo.addEventListener('statechange', () => {
            if (novo.state === 'installed' && navigator.serviceWorker.controller) mostrarAtualizacao(reg);
          });
        });

        // Procura atualização ao abrir e ao voltar para o aplicativo.
        reg.update().catch(() => {});
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') reg.update().catch(() => {});
        });
      }).catch(() => {});
    });

    // Quando a nova versão assume o controle, recarrega uma única vez.
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!tinhaControleAntes || recarregarNaTroca) return;
      recarregarNaTroca = true;
      window.location.reload();
    });
  }
})();
