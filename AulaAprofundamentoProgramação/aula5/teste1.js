class Carro {
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
    }

    imprimirDetalhes() {
        console.log(`Carro: ${this.marca}, Ano: ${this.ano}`);
    }
}

let carro1 = new Carro ('Corrola', 2012);

//carro1.imprimirDetalhes();

//console.log(carro1);

class CarroEsportivo extends Carro{
    constructor (marca, ano, velocidadeMáxima) {
        super(marca, ano);
        this.velocidadeMáxima = velocidadeMáxima;
    }

    detalhar() {
        console.log(`O carro é da marca ${this.marca}, do ano ${this.ano} e tem velocidade máxima igual a ${this.velocidadeMáxima}km/h.`);
    }

    imprimirDetalhes () {
        console.log(`Marca: ${this.marca}, Ano: ${this.ano}, Velocidade Máxima: ${this.velocidadeMáxima}`)
    }
}

let carro2 = new CarroEsportivo('Ferrari', 2020, 180);
carro2.imprimirDetalhes();
carro2.detalhar();
console.log(carro2);