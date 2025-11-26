// OCP
class Produto {
    constructor(preco) {
      this.preco = preco;
    }
  
    getDesconto() {
      return 0;
    }
  }
  
  class Eletronico extends Produto {
    getDesconto() {
      return this.preco * 0.1;
    }
  }
  
  class Roupa extends Produto {
    getDesconto() {
      return this.preco * 0.2;
    }
  }
  
  class Alimento extends Produto {
    getDesconto() {
      return this.preco * 0.05;
    }
  }
  
  const produtos = [
    new Eletronico(1000),
    new Roupa(200),
    new Alimento(50)
  ];
  
  produtos.forEach(p => console.log(p.getDesconto()));
  