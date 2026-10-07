# Pixelarte

Pixelarte é uma aplicação web instalável (PWA) para criar gráficos em pixel a partir de imagens, com foco em projetos de **crochê** e **macramê**.

A aplicação funciona no navegador, pode ser instalada como app e continua utilizável offline após o primeiro carregamento.

## Versão atual

**v1.6**

## Site público

https://afabimartins.github.io/pixelarte/

## Recursos

- Geração de gráficos a partir de imagens JPG, PNG e WEBP
- Modos para crochê e macramê
- Controle de quantidade de colunas, carreiras e cores
- Paletas predefinidas e paleta baseada na própria imagem
- Projetos persistentes no navegador
- Salvamento automático
- Exportação e importação de projetos
- Limpeza do projeto atual
- Exclusão de projetos salvos
- Contador de carreiras
- Próxima carreira calculada automaticamente
- Navegação visual entre carreiras sem alterar o progresso
- Marcação de carreiras concluídas
- Contador disponível também em tela cheia
- Zoom de 10% a 400%
- Redimensionamento real do gráfico
- Numeração de linhas e colunas
- Marcações fixas durante a rolagem
- Rolagem correta até a coluna 1 em tela cheia
- Visualização em tela cheia
- Download do gráfico em PNG
- Impressão e geração de PDF em múltiplas páginas
- Instalação como PWA
- Funcionamento offline
- Detecção real de conexão Online/Offline
- Atualização controlada da PWA
- Página de privacidade disponível também offline
- Espaços preparados para publicidade responsiva

## Estrutura do projeto

```text
pixelarte/
├── index.html
├── privacy.html
├── manifest.webmanifest
├── service-worker.js
├── ads-config.js
├── favicon.svg
├── iniciar-pixelarte.cmd
├── README.md
├── LICENSE
└── icons/
    ├── icon-192.png
    ├── icon-512.png
    └── maskable-512.png
```

## Executar localmente no Windows

O Pixelarte não precisa de processo de build.

É necessário ter o Python instalado.

Execute:

```text
iniciar-pixelarte.cmd
```

O projeto será servido localmente em:

```text
http://localhost:8080
```

O arquivo `.cmd` também verifica se a porta 8080 já está sendo usada, evitando iniciar acidentalmente uma versão antiga do projeto.

## Instalar como aplicativo

Abra o Pixelarte pelo navegador em um endereço servido por HTTP/HTTPS.

Quando a instalação estiver disponível, use o botão de instalação oferecido pela aplicação ou pelo navegador.

Depois de instalado, o Pixelarte pode ser aberto como um aplicativo independente.

## Funcionamento offline

O Pixelarte utiliza um Service Worker para armazenar os arquivos essenciais da aplicação.

Depois do primeiro carregamento, é possível continuar usando o aplicativo sem conexão com a internet.

Quando offline:

- o gráfico continua disponível;
- projetos locais continuam acessíveis;
- o contador de carreiras continua funcionando;
- a página de privacidade continua acessível;
- espaços de publicidade ficam ocultos;
- o indicador da interface mostra `Offline`.

Desde a v1.4, a detecção de conectividade verifica acesso real à internet, em vez de depender apenas de `navigator.onLine`.

## Persistência dos projetos

Os projetos são armazenados localmente no navegador usando IndexedDB.

Isso permite fechar e reabrir o Pixelarte sem perder o trabalho salvo naquele navegador/perfil.

Também é possível exportar um projeto e importá-lo posteriormente.

Na v1.5 foram adicionadas duas ações de gerenciamento:

- **Limpar projeto**: remove imagem, gráfico, progresso e configurações do projeto atual, mantendo o projeto salvo.
- **Excluir projeto**: remove definitivamente o projeto selecionado após confirmação.

## Contador de carreiras

O contador separa o progresso real da navegação visual.

- **Concluir e avançar** marca a carreira em andamento como concluída e avança o progresso.
- **Anterior** e **Próxima** permitem consultar outras carreiras sem alterar o progresso.
- **Próxima carreira** é calculada automaticamente e não é editável.
- **Marcar/desmarcar** permite ajustar o estado de uma carreira visualizada.
- O contador permanece disponível em tela cheia.

## Privacidade

A partir da v1.6, o Pixelarte possui uma página pública de privacidade em:

```text
privacy.html
```

Ela descreve:

- armazenamento local de projetos e imagens;
- uso de IndexedDB, localStorage e cache do Service Worker;
- funcionamento offline;
- verificação técnica de conectividade;
- hospedagem no GitHub Pages;
- status atual da publicidade;
- ausência de analytics próprio nesta versão;
- formas de excluir dados locais.

A página de privacidade também é incluída no cache da PWA para permanecer acessível offline.

## Impressão e PDF

Gráficos grandes são divididos em várias páginas para impressão.

A impressão inclui:

- gráfico;
- numeração;
- identificação do projeto;
- legenda de cores;
- divisão em páginas quando necessário.

Para gerar PDF, use a opção **Imprimir / PDF** e selecione a impressora PDF disponível no sistema.

## Atualização da PWA

A partir da v1.3, o processo de atualização da PWA foi reforçado para evitar que versões antigas permaneçam presas no cache.

O Service Worker utiliza mecanismos de atualização e tomada de controle da nova versão, mantendo o funcionamento offline como fallback.

Quando uma atualização estiver disponível, a aplicação pode solicitar confirmação para **Atualizar agora**.

## Publicidade

O projeto possui espaços preparados para anúncios responsivos, mas a integração com uma rede de publicidade não está ativa por padrão.

A configuração atual fica em:

```text
ads-config.js
```

Os anúncios devem permanecer fora de funções essenciais como:

- edição e leitura do gráfico;
- tela cheia;
- contador de carreiras;
- impressão/PDF;
- uso offline.

A ativação de publicidade real deve ocorrer somente depois da configuração dos mecanismos de consentimento aplicáveis e da atualização da política de privacidade quando necessário.

## Tecnologias

- HTML
- CSS
- JavaScript
- Canvas API
- IndexedDB
- Web App Manifest
- Service Worker
- Progressive Web App (PWA)

O projeto não depende de framework ou processo de compilação para funcionar.

## Histórico do projeto

Os primeiros commits deste repositório representam uma **cronologia reconstruída a partir de protótipos reais do Pixelarte**.

As funcionalidades foram restauradas em etapas de acordo com a evolução efetivamente ocorrida no projeto, mas esses commits não foram originalmente criados nas datas em que cada protótipo histórico foi desenvolvido.

A reconstrução foi usada para preservar de forma clara a evolução técnica do projeto no Git.

A sequência reconstruída inclui:

1. protótipo inicial;
2. projetos persistentes e contador de carreiras;
3. zoom e redimensionamento;
4. numeração de carreiras e colunas;
5. impressão multipágina;
6. visualização em tela cheia;
7. marcações fixas durante a rolagem;
8. correção da rolagem até a coluna 1;
9. transformação em PWA instalável e offline;
10. correção do foco persistente dos botões;
11. correção da próxima carreira no campo de destino;
12. correção do processo de atualização e cache da PWA.

A partir desse ponto, os commits passam a representar o desenvolvimento normal do projeto.

## Status

O Pixelarte está publicado como projeto open source e hospedado no GitHub Pages.

A versão v1.6 adiciona a primeira camada pública de privacidade antes da futura ativação de publicidade.

## Licença

Este projeto é distribuído sob a **MIT License**.

Consulte o arquivo [`LICENSE`](LICENSE) para os termos completos.
