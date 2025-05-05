class Livro{
    constructor(titulo, autor, sendoEmprestado) {

    this.titulo = titulo,
    this.autor = autor,
    this.sendoEmprestado

    }

    emprestar() {
        if (this.sendoEmprestado != true){
            this.sendoEmprestado = true
            console.log(`Status de empréstimo de ${this.titulo} alterado para true `)
        }
    }

    ler() {
        console.log(`O livro ${this.titulo} foi escrito por ${this.autor}`)
    }
}

agatha = new Livro('A casa do Penhasco', 'Agatha Christie', false)
agatha.ler()