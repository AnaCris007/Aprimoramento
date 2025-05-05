const leao = {animal: "leão", proximo: null};
const elefante = {animal: "elefante", proximo: null};
const zebra = {animal: "zebra", proximo: null};
const girafa = {animal: "girafa", proximo: null};

leao.proximo = elefante;
elefante.proximo = zebra;
zebra.proximo = girafa;

let atual = leao;
while (atual != null ){
    console.log(atual.animal);
    atual = atual.proximo
}

console.log('\n')

const aguia = {animal: "aguia", proximo: null}
const tubarao = {animal: "tubarao", proximo: null}
zebra.proximo = aguia;
aguia.proximo = tubarao;
tubarao.proximo = girafa;

atual = leao;
while (atual != null ){
    console.log(atual.animal);
    atual = atual.proximo
}

console.log('\n')

//Remover elefante

atual = leao;
while (atual != null ){
    if (atual.proximo.animal == 'elefante'){
        atual.proximo = atual.proximo.proximo // pula o elefante
        break;
    }
    atual = atual.proximo
}

atual = leao;
while (atual != null) {
    console.log(atual.animal)
    atual = atual.proximo
}

cont = 0;
atual = leao;
while (atual != null) {
    console.log(atual.animal)
    atual = atual.proximo
}