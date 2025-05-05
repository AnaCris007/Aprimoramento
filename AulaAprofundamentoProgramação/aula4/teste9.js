const pessoa = {
    nome: 'João',
    falar: function() {
        console.log("Oi, meu nome é " + this.nome);
    }
}

pessoa.falar();