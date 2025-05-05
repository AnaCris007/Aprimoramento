var input = '3\n8 12\n9 27\n259 111';
var lines = input.split('\n');

let numeroDeCasos = parseInt(lines[0]);
let casos = [];

for (let i = 1; i <= numeroDeCasos; i ++) {
    let num = lines[i].split(' ').map(Number);
    casos.push(num);
}

function mdc(a, b){
    if (b === 0){
        console.log(a)
    } else{
        mdc(b, (a % b))
    }
}
//Algoritmo de Euclides 
let resultado = 0;
for (let i = 0; i < casos.length; i ++) {
    mdc(casos[i][0], casos[i][1])
}