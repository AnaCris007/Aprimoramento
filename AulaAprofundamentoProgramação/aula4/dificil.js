const estoque = {
    Banana: 10,
    Maçã: 5,
    Laranja: 8
};

function venderFruta (fruta, quantidade) {
    if (fruta === 'Banana'){
        if (quantidade <= estoque.Banana){
            estoque.Banana -= quantidade
            console.log('Venda realizada!')
        }else{
            console.log('Estoque insuficiente');
        }
    }
    if (fruta === 'Maça') {
        if (quantidade <= estoque.Maçã ){
            estoque.Maçã -= quantidade
            console.log('Venda realizada!');
            console.log(estoque);
        }else{
            console.log('Estoque insuficiente!');
        }
    } 
    if (fruta === 'Laranja') {
        if (quantidade <= estoque.Laranja) {
            estoque.Laranja -= quantidade
            console.log('Venda realizada!')
            console.log(estoque)
        } else {
            console.log('Estoque insuficiente!')
        }
    }
}  

venderFruta('Laranja', 3)
