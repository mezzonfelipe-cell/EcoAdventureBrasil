# Eco Adventure Brasil — Aplicativo instalável

Jogo de aventura e reciclagem feito em HTML/Canvas. Adaptado ao modelo do aplicativo NOVA: um site instalável como PWA no Windows, Android e iPhone, além de um iniciador Windows que abre em janela própria.

## Publicação no GitHub Pages
1. Baixe o arquivo `EcoAdventureBrasil-Modelo-NOVA-PC-Celular.zip` fornecido nesta conversa e extraia.
2. Abra o repositório, clique em **Add file > Upload files** e envie o conteúdo extraído, **incluindo os arquivos da pasta `icons`**. Não envie o ZIP sem extrair. Selecione a pasta/arquivos de forma a manter os caminhos relativos.
3. Em **Settings > Pages > Build and deployment**, escolha **Deploy from a branch**, branch `main`, pasta `/(root)`, e salve.
4. Acesse https://mezzonfelipe-cell.github.io/EcoAdventureBrasil/ quando a publicação estiver ativa.

## Instalar
- **Windows (pelo site):** abra pelo Chrome ou Edge e use **Instalar aplicativo**. O jogo abre em uma janela própria.
- **Windows (sem internet):** extraia o pacote e execute `INSTALAR-WINDOWS.cmd`; será criado o atalho **Eco Adventure Brasil** na área de trabalho, abrindo o jogo em janela do navegador sem abas. Não é necessário Node ou Python.
- **Android:** abra o site pelo Chrome e toque em **Instalar aplicativo** ou escolha **Instalar app** no menu do navegador.
- **iPhone:** abra o site pelo Safari e escolha **Compartilhar > Adicionar à Tela de Início**.

O modo PWA requer HTTPS (GitHub Pages) ou localhost. Abrir `index.html` diretamente por arquivo não registra o service worker. Após a primeira visita com internet, os arquivos usados pelo jogo são guardados para uso offline.

## Atualizações
Republique os arquivos modificados e altere o identificador `CACHE` em `sw.js` quando lançar uma versão nova. Os aparelhos instalados receberão a nova versão quando conectados e o cache for atualizado.

Não inclui nenhum recurso de login ou conexão ao serviço de estoque NOVA, somente o **modelo de distribuição como aplicativo**.
