interface Foto {
  titulo: string;
  src: string;
}

export class Produto {
  id: string;
  fotos: Foto[];
  nome: string;
  preco: string;
  descricao: string;
  vendido: string;
  usuario_id: string;

  constructor(
    data = {
      id: '',
      fotos: [] as Foto[],
      nome: '',
      preco: '',
      descricao: '',
      vendido: '',
      usuario_id: '',
    }
  ) {
    this.id = data.id;
    this.fotos = data.fotos;
    this.nome = data.nome;
    this.preco = data.preco;
    this.descricao = data.descricao;
    this.vendido = data.vendido;
    this.usuario_id = data.usuario_id;
  }
}
