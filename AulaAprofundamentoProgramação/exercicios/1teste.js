var input = '7.0 5.0 7.0\n';
var lines = input.split('\n');

let numbers = lines[0].split(' ').map(parseFloat);

// Ordena em ordem decrescente
numbers.sort((a, b) => b - a);

// A = maior, B = do meio, C = menor
let [A, B, C] = numbers;

console.log("A:", A);
console.log("B:", B);
console.log("C:", C);
