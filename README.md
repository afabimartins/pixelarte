# Pixelarte — PWA v1.2

Esta pasta transforma o protótipo web do Pixelarte em um Progressive Web App (PWA).

## O que foi acrescentado

- Manifesto para instalação como aplicativo.
- Service Worker para funcionamento offline.
- Ícones 192×192, 512×512 e maskable.
- Solicitação de armazenamento persistente quando suportada.
- Botão "Instalar app" quando o navegador disponibilizar a instalação.
- Indicador Online/Offline.
- Dois espaços responsivos reservados para publicidade.
- Publicidade real desativada por padrão em `ads-config.js`.
- Espaços de publicidade ocultos em modo offline, impressão/PDF e tela cheia.

## Importante

PWA e Service Worker não funcionam corretamente abrindo `index.html` diretamente com `file://`.

Use um servidor local.

### Windows

Dê duplo clique em:

`iniciar-pixelarte.cmd`

ou execute, nesta pasta:

`py -m http.server 8080`

Depois abra:

`http://localhost:8080`

## Instalação

No Chrome/Edge, use o botão "Instalar app" quando ele aparecer ou o comando de instalação do navegador.

## Publicidade

`ads-config.js` contém apenas a preparação dos espaços. A integração real com uma rede de anúncios deve permanecer desligada até que privacidade, consentimento e configuração da rede estejam prontos.

## Histórico

Os commits iniciais deste repositório representam uma reconstrução cronológica baseada nos protótipos reais do Pixelarte. Eles foram recriados posteriormente para documentar a evolução do projeto; não representam as datas originais em que cada protótipo foi produzido.


## PWA v1.1

- Corrige o contorno de foco persistente após clique/toque.
- Mantém foco visível para navegação por teclado.
- O campo "Ir para a carreira" ainda mantém o comportamento anterior nesta versão; a mudança para mostrar a próxima carreira pertence à v1.2.


## PWA v1.2

- O campo "Ir para a carreira" passa a mostrar a próxima carreira/destino.
- Exemplo: se a carreira atual é 7 e 6 carreiras estão concluídas, o campo mostra 8.
- O comportamento de atualização/cache da PWA permanece o mesmo desta fase.
