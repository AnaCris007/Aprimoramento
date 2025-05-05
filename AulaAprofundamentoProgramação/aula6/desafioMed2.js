let frutas1 = ['maçã', 'banana', 'uva'];
let frutas2 = ['kiwi', 'laranja', 'melancia'];
let estoqueTotal = frutas1.concat(frutas2);
estoqueTotal.pop();
estoqueTotal.splice(0,1);
console.log( ...estoqueTotal);
