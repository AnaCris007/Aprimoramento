const prompt = require('readline-sync');
let soma = 0
let x = prompt.question('Quantas notas deseja adicionar? ')

for(let i = 1; i <= x; i++) {
let i = parseFloat(prompt.question("Digite a nota: "));
soma += i
}

let media = soma/x
console.log(`A média do aluno foi ${media.toFixed(2)}`)

if (media >= 7) {
console.log('Aluno APROVADO!')
} else {
console.log('Aluno REPROVADO!')
}

