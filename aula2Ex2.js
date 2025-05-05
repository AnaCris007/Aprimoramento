const prompt = require('readline-sync');
let num = prompt.question('Digite um numero: ');
if (num % 2 == 0) {
    console.log('O número é par');
} else {
    console.log('O número é ímpar')
}

