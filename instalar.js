(() => {
  const trigger=document.getElementById('app-install-trigger');
  const modal=document.getElementById('app-install-modal');
  const info=document.getElementById('app-install-description');
  const confirm=document.getElementById('app-install-confirm');
  if(!trigger||!modal)return;
  let deferred=null;
  const standalone=()=>window.matchMedia('(display-mode: standalone)').matches||navigator.standalone===true;
  const isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)||(/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints>1);
  const android=/Android/.test(navigator.userAgent);
  const show=()=>{trigger.hidden=standalone()||location.protocol==='file:';};
  window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferred=e;show();});
  window.addEventListener('appinstalled',()=>{deferred=null;modal.hidden=true;show();});
  trigger.addEventListener('click',()=>{
    confirm.hidden=!deferred;
    info.textContent=deferred?'Instale para abrir o jogo pela tela inicial, em uma janela própria e sem a barra do navegador.':isiOS?'No Safari: toque em Compartilhar e depois em Adicionar à Tela de Início. Abra o jogo pelo novo ícone.':android?'No Chrome: abra o menu ⋮ e escolha Instalar app ou Adicionar à tela inicial.':'No Chrome ou Edge: abra o menu ⋮ e selecione Instalar Eco Adventure Brasil ou Instalar aplicativo. Em alguns navegadores aparece um ícone de instalação na barra de endereço.';
    modal.hidden=false;
  });
  confirm.addEventListener('click',async()=>{
    if(!deferred)return;
    const event=deferred;deferred=null;modal.hidden=true;
    try{await event.prompt();await event.userChoice;}catch(err){console.warn('Instalação:',err);}
    show();
  });
  document.getElementById('app-install-close').addEventListener('click',()=>modal.hidden=true);
  modal.addEventListener('click',e=>{if(e.target===modal)modal.hidden=true;});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')modal.hidden=true;});
  show();
})();
