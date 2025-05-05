const no1 = { valor: "A", proximo: null };
const no2 = { valor: "B", proximo: null };
const no3 = { valor: "C", proximo: null };

no1.proximo = no2;
no2.proximo = no3;

// Contar
let atual = no1;
let contador = 0;

while (atual !== null) {
  contador++;
  atual = atual.proximo;
}

console.log("Quantidade de nós:", contador);
// Saída: 3