const prompt = require('readline-sync');
soma = 0;
let maca = prompt.question('Quantas macas vc quer? ');
if (maca > 0) {
    let PMaca = prompt.question('Qual o preco da maca? ');
    soma += maca * PMaca
}
let banana = prompt.question('Quantas bananas voce quer? ');
if (banana > 0) {
    let PBanana = prompt.question('Qual o preco da banana? ');
    soma += banana * PBanana
}

let laranja = prompt.question('Quantas laranjas voce quer? ');
if (laranja > 0) {
    let PLaranja = prompt.question('Qual o preco da laranja ');
    soma += laranja * PLaranja
}

let pera = prompt.question('Quantas peras voce quer? ');
if (pera > 0) {
    let PPera = prompt.question('Qual o preco da pera? ');
    soma += pera * PPera
}

console.log('O total da sua compra foi R$' + soma.toFixed(2))
