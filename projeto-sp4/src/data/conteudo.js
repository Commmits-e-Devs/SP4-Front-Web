import {
  IconeAlvo,
  IconeCheck,
  IconeTexto,
  IconeEmail,
  IconeTelefone,
  IconePin,
} from '../components/Icones'

export const linksNav = [
  { href: '#solucao', texto: 'A Solução' },
  { href: '#publico', texto: 'Público-Alvo' },
  { href: '#galeria', texto: 'Galeria' },
  { href: '#equipe', texto: 'Nossa Equipe' },
  { href: '#contato', texto: 'Contato' },
]

export const estatisticas = [
  { valor: '0 ajustes', rotulo: 'Fricção zero' },
  { valor: '<1s', rotulo: 'Calibração da IA' },
  { valor: 'ZEISS', rotulo: 'Parceria óptica' },
]

export const cartoesSolucao = [
  {
    icone: IconeAlvo,
    titulo: 'IA integrada de contexto',
    texto:
      'Identifica se você tocou em um texto, uma pessoa ou uma paisagem e calibra ISO, luz e nitidez instantaneamente — sem menus, sem tentativa e erro.',
  },
  {
    icone: IconeCheck,
    titulo: 'Fricção zero',
    texto:
      'Elimina a necessidade de ajustes manuais. Um toque é igual a uma configuração profissional, pronta antes que o professor apague a lousa.',
  },
  {
    icone: IconeTexto,
    titulo: 'Legibilidade garantida',
    texto:
      'Fim das fotos borradas ou estouradas. O conteúdo da aula fica sempre nítido e pronto para revisão de prova.',
  },
]

export const passos = [
  {
    numero: '01',
    titulo: 'Aponte para o conteúdo',
    texto:
      'Lousa, slide, livro ou uma pessoa em movimento — o app abre já no enquadramento certo.',
  },
  {
    numero: '02',
    titulo: 'A IA identifica o objeto',
    texto:
      'O software reconhece texto, rosto ou paisagem em milissegundos, antes mesmo do disparo.',
  },
  {
    numero: '03',
    titulo: 'Tudo é calibrado sozinho',
    texto:
      'ISO, luz e nitidez se ajustam automaticamente e a foto já nasce organizada na pasta certa.',
  },
]

export const detalhesPublico = [
  {
    titulo: 'Tarefas do dia a dia',
    itens: [
      'Registrar lousas e slides rapidamente durante a aula',
      'Escanear documentos e livros para estudo digitalizado',
      'Organizar a galeria separando estudo de lazer',
    ],
  },
  {
    titulo: 'Dores',
    itens: [
      'Perder a explicação do professor tentando focar a câmera',
      'Reflexos e iluminação estourada tornam o texto ilegível',
      'Fotos ruins acumulam memória e geram desorganização',
    ],
  },
  {
    titulo: 'Ganhos que a solução entrega',
    larguraTotal: true,
    itens: [
      'Capturas perfeitas de primeira, com fricção zero',
      'Legibilidade garantida para revisar antes da prova',
      'Organização automática por contexto com estética profissional',
    ],
  },
]

export const telasGaleria = [
  {
    src: '/img/tela01.png',
    alt: 'Tela de Captura do App',
    titulo: 'Captura Inteligente',
    texto: 'Modo noturno e calibração de texto recomendados automaticamente pela IA.',
  },
  {
    src: '/img/galeria.png',
    alt: 'Tela da Galeria do App',
    titulo: 'Galeria Organizada',
    texto: 'Pastas inteligentes separam automaticamente fotos de estudo e vida social.',
  },
  {
    src: '/img/config.png',
    alt: 'Tela de Configurações',
    titulo: 'Configurações Diretas',
    texto: 'Poucas telas, sem funções escondidas — layout moderno e direto ao ponto.',
  },
]

export const equipe = [
  { iniciais: 'NR', nome: 'Nicolas Ramalho', rm: '572939', funcao: 'Desenvolvimento Frontend e UX Design' },
  { iniciais: 'VB', nome: 'Vitor Bianchini', rm: '569804', funcao: 'Arquitetura de Software e IA' },
  { iniciais: 'JA', nome: 'João Arruda', rm: '570342', funcao: 'Pesquisa de Usuário e Product Design' },
  { iniciais: 'DB', nome: 'Diogo Bittar', rm: '569657', funcao: 'Desenvolvimento Backend e Integração' },
  { iniciais: 'LL', nome: 'Lucas Lima', rm: '572047', funcao: 'Documentação e Estratégia de Negócios' },
]

export const contatos = [
  { icone: IconeEmail, titulo: 'E-mail', texto: 'contato@jovismartflow.com', href: 'mailto:contato@jovismartflow.com' },
  { icone: IconeTelefone, titulo: 'Telefone / WhatsApp', texto: '(11) 4002-8922', href: 'tel:+551140028922' },
  { icone: IconePin, titulo: 'Localização', texto: 'São Paulo, SP — Brasil' },
]
