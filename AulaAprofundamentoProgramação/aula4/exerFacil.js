function precoFruta(fruta) {
    if (fruta === 'Banana'){
        return 'R$2,00';
    } else if  (fruta === 'Maça') {
        return 'R$3,00'
    } else if (fruta === 'Laranja') {
        return 'R$2,50'
    } else {
        return 'Fruta não disponível'
    }
};

console.log(precoFruta('Banana'))