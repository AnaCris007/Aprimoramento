const no1 = { valor: "A", proximo: null};
const no2 = { valor: "B", proximo: null};
const no3 = { valor: "C", proximo: null};
const no4 = { valor: "D", proximo: null};


no1.proximo = no2;
no2.proximo = no3;
no3.proximo = no4;

console.log(no1.valor);
console.log(no1.proximo.valor);
console.log(no2.proximo.valor+ '\n'); //OU
//console.log(no1.proximo.proximo.valor);

let atual = no1;
while (atual !== null) {
    console.log(atual.valor)
    atual = atual.proximo;
}





