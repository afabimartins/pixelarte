# Pixelarte PWA v1.3

Esta versão corrige o fluxo de atualização do PWA durante os testes locais.

## Alterações da v1.3

- O aplicativo mostra **v1.3** no cabeçalho para permitir conferir a versão carregada.
- O Service Worker usa atualização imediata (`skipWaiting` + `clients.claim`).
- O `index.html` e os arquivos do app usam a rede primeiro quando há conexão e o cache como fallback offline.
- O registro do Service Worker usa `updateViaCache: "none"` e força `registration.update()`.
- O iniciador do Windows detecta se a porta 8080 já está ocupada por um servidor antigo e, em vez de abrir silenciosamente a versão anterior, pede para fechá-lo.
- O campo do contador mostra a próxima carreira como destino: carreira atual 8 → campo 9.
- O rótulo foi esclarecido para **Próxima carreira / Ir para**.

## Como atualizar no teste local

1. Feche o PWA Pixelarte.
2. Na janela preta do servidor antigo, pressione `Ctrl+C` e confirme o encerramento se necessário.
3. Extraia esta pasta.
4. Execute `iniciar-pixelarte.cmd`.
5. Confirme no cabeçalho que aparece **v1.3**.
6. Abra novamente o aplicativo instalado. Ele deve assumir a nova versão.

Os projetos salvos no IndexedDB permanecem no mesmo `localhost:8080`, portanto não é necessário apagá-los para atualizar.

## Publicação

Em uma hospedagem HTTPS o mesmo mecanismo de atualização funciona sem o servidor local do Python.

## Anúncios

Os slots de anúncio continuam preparados e desativados por padrão. Eles permanecem ocultos em tela cheia, impressão/PDF e offline.
