class Fruta {
    constructor(nome, tipo, preco){
        this.nome = nome;
        this.tipo = tipo;
        this.preco = preco;
    }

    informacoes() {
        console.log(`Nome: ${this.nome}; Tipo da fruta: ${this.tipo}; Preço da fruta: R$${this.preco.toFixed(2)}.`);
    }
}

let banana = new Fruta ('banana', 'Tropical', 7);
let maca = new Fruta ('laranja', 'Cítrica', 8);
banana.informacoes();
maca.informacoes();

class Comprar extends Fruta {
    constructor (nome, tipo, preco, quantidade) {
        super(nome, tipo, preco);
        this.quantidade = quantidade;
    }

    total() {
        console.log(`Se você comprar ${this.quantidade} ${this.nome} você terá que pagar ${(this.quantidade*this.preco).toFixed(2)}`)
    }
}

let comprar1 = new Comprar('limão', 'Cítrico', 5, 8);
comprar1.total();