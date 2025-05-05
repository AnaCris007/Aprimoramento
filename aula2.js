const prompt = require('readline-sync');
let num = prompt.question('Digite um numero: ');
if  (num > 0) {
    console.log('É um número positivo');
} else if (num < 0) {
    console.log('É um número negativo');
} else {
    console.log('É o número 0');
}
