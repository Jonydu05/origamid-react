const perguntas: pergunta[] = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: ['React.makeComponent()', 'React.createComponent()', 'React.createElement()'],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: ['import Component from "./Component"', 'require("./Component")', 'import "./Component"'],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

type pergunta = {
  pergunta: string;
  options: string[];
  resposta: string;
  id: string;
};

const clientes: cliente[] = [
  {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  },
  {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  },
];

type cliente = {
  cliente: string;
  idade: number;
  ativa: boolean;
  compras: compra[];
};

type compra = {
  nome: string;
  preco: string;
};

const produtos: produto[] = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

type produto = {
  id: number;
  nome: string;
  preco: string;
  cores: string[];
};

const produtosComponentes: pdCmp[] = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

type pdCmp = {
  nome: string;
  propriedades: string[];
};

export { perguntas, clientes, produtos, produtosComponentes };

export type { produto, cliente, pdCmp };
