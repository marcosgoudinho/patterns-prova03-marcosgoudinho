// Controller
class PedidoController {
    criar(req) {
      const pedido = new Pedido(req.itens);
      console.log("Pedido criado:", pedido.total());
    }
  }
  
  class Pedido {
    constructor(itens) {
      this.itens = itens;
    }
  
    total() {
      return this.itens.reduce((s, i) => s + i.preco * i.qtd, 0);
    }
  }
  
  new PedidoController().criar({ itens: [{ preco: 10, qtd: 3 }] });
  