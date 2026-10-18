# Site do Studio Balotty Tattoo e Naju Piercer

Site só de front-end (React + Vite). Não usa banco de dados: o orçamento abre direto o WhatsApp do Tales ou da Naju com a mensagem pronta.

## Subir no GitHub (sem instalar nada)
1. Em github.com/new, crie um repositório **privado** (ex.: `site-balotty`).
2. Clique em **uploading an existing file** e arraste TODO o conteúdo desta pasta (não o .zip). Inclua a pasta `.github` (se ela estiver oculta, ative "mostrar arquivos ocultos").
3. Clique em **Commit changes**.

Para o site ficar no ar de graça (opcional): em Settings > Pages, escolha **Source: GitHub Actions**. A cada mudança o site é publicado em `https://SEU-USUARIO.github.io/site-balotty/`. Repositório privado com Pages pode exigir plano pago do GitHub; se for o caso, deixe o repositório como cópia de segurança e hospede em outro lugar.

## Rodar no seu computador
```
npm install
npm run dev
```
Abra o endereço que aparecer (normalmente http://localhost:5173).

## Onde colocar as fotos
1. Copie a foto para `public/fotos/`.
2. Abra `src/helpers/fotos.tsx` e troque `null` por `foto("nome-do-arquivo.jpg")` no lugar certo. O arquivo tem exemplos para tatuagens, famílias do furinho humanizado e resultados de remoção.
3. Fotos das regiões de piercing (as janelas dos botões): bloco `regioes` no mesmo arquivo.

Enquanto uma foto não for colocada, aparece o espaço "Adicionar foto".

## Onde mudar textos e contatos
- Telefones e Instagram: `src/helpers/contatos.tsx`
- Regiões de piercing, estilos de tatuagem e link do Google: `src/helpers/opcoes.ts`
- Serviços do orçamento e menu: `src/helpers/servicos.tsx`
- Cada página: `src/pages/`
