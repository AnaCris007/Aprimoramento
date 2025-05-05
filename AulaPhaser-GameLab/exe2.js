let pessoas = [
    {nome: 'João', idade: 18, entrouGameLab: true},
    {nome: 'Maria', idade: 20, entrouGameLab: true},
    {nome: 'Jorge', idade: 19, entrouGameLab: false},
]

console.log('Pessoas legais: ')
pessoas.forEach(element => { if (element.entrouGameLab === true){
    console.log(element.nome)
}
});