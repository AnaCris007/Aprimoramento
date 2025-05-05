const no1 = { valor: "A", proximo: null};
const no2 = { valor: "B", proximo: null};
const no3 = { valor: "C", proximo: null};
const no4 = { valor: "D", proximo: null};

no1.proximo = no2;
no2.proximo = no3;
no3.proximo = no4;

const noX = { valor: "X", proximo:null};
const noZ = {valor: "Z", proximo: null};
noX.proximo = noZ;
noZ.proximo = no3;
no2.proximo = noX;

//remover
let atual = no1;
while (atual !== null) {
    if (atual.proximo && atual.proximo.valor === "C") {
        atual.proximo = atual.proximo.proximo; //Pula C
        break;
    }
    atual = atual.proximo;
}

atual = no1;
while (atual !== null) {
    console.log(atual.valor);
    atual = atual.proximo;
}

