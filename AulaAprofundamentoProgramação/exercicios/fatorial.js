var input = '10';
var lines = input.split('\n');

function fatorial(numero) {
    if (numero == 0 || numero == 1){
        return 1
    } else {
        let resultado = numero * fatorial(numero-1)
        return resultado
    }
}

console.log(fatorial(parseInt(lines[0])))