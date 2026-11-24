# Eco Adventure Brasil — Aplicativo instalável

Jogo de aventura e reciclagem feito em HTML/Canvas, distribuído no mesmo modelo do aplicativo NOVA: um site instalável como PWA no Windows, Android e iPhone, além de um iniciador Windows que abre o jogo em janela própria.

Site: https://mezzonfelipe-cell.github.io/EcoAdventureBrasil/

## Arquivos
- `index.html` — o jogo completo (música e imagens já embutidas), com o botão **📲 Instalar app**.
- `manifest.webmanifest`, `sw.js`, `instalar.js` — instalação como aplicativo e uso offline.
- `icons/` — ícones do aplicativo (Android, iPhone, Windows).
- `EcoAdventureBrasil.ico`, `INSTALAR-WINDOWS.cmd`, `abrir-jogo.cmd`, `DESINSTALAR-WINDOWS.cmd` — instalação offline no Windows.

## Publicação no GitHub Pages
Em **Settings > Pages > Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/(root)`, e salve.

## Instalar
- **Windows (pelo site):** abra pelo Chrome ou Edge e toque em **📲 Instalar app** (ou no ícone de instalação da barra de endereço). O jogo abre em uma janela própria.
- **Windows (sem internet):** em **Code > Download ZIP**, baixe e extraia o repositório e execute `INSTALAR-WINDOWS.cmd`. Será criado o atalho **Eco Adventure Brasil** na área de trabalho. Não é necessário Node ou Python.
- **Android:** abra o site pelo Chrome e toque em **📲 Instalar app** ou escolha **Instalar app** no menu ⋮.
- **iPhone:** abra o site pelo Safari e escolha **Compartilhar > Adicionar à Tela de Início**.

O modo PWA requer HTTPS (GitHub Pages) ou localhost. Abrir `index.html` direto do arquivo não registra o service worker. Após a primeira visita com internet, o jogo fica guardado para uso offline.

## Atualizações
A cada versão nova, altere o identificador `CACHE` em `sw.js` e o `?v=` do `instalar.js` no final do `index.html` (use o mesmo número). Os aparelhos instalados recebem a versão nova na próxima vez que abrirem o jogo com internet.
