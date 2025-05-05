var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let num = parseInt(lines[0]);
cidade = [];
consumo = [];
consumoMédio = 0
for (i = 1; i <= num; i++){
    cidade[i] = lines[i].split(' ').map(Number);
    console.log(`Cidade# ${i+1}:`)
    consumo[i] = parseInt(cidade[i][1]/cidade[i][0]);
    consumo.sort((a,b)=> a - b)
    for (x in consumo){
        console.log(cidade[i - 1], consumo[x])
    }
    consumoMédio += cidade[i][1]
    
console.log(consumoMédio/num)

}
