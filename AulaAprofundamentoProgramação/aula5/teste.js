class Pessoa {
    constructor(nome, idade, dorme, sabe){
        this.nome = nome;
        this.idade = idade;
        this.dorme = dorme;
        this.sabe = sabe;
    }

    //método
    imprimirInfo() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
        console.log(`Dorme quantas horas por dia: ${this.dorme}`);
        console.log(`Sabe tudo de tilemap: ${this.sabe}`);
    }
}

//let k = new Pessoa ('Karol', '19', '18 horas', 'sim');
//k.imprimirInfo();

class Aluno extends Pessoa {
    constructor(nome, idade, curso){
        super(nome, idade); // Chamada construtor da superclasse (Pessoa)
        this.curso = curso;
    }

    //Novo método 
    imprimirCusto() {
        console.log(`${this.nome} está matriculado no curso de ${this.curso}.`);
    }
    
    //Podemos tmambém sobrescrever o método da superclasse se desejado
    imprimirInfo() {
        console.log(`Aluno: ${this.nome}, Idade: ${this.idade}, Curso: ${this.curso}`);
    }
}

let karol = new Aluno('Karol', 19, 'ADM-TECH');
karol.imprimirInfo();