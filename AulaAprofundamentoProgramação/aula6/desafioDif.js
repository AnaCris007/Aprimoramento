let estoqueManha = ['banana', 'maçã', 'abacaxi', 'laranja'];
let estoqueTarde = ['uva', 'melancia', 'banana', 'kiwi'];
let estoqueCompleto = estoqueManha.concat(estoqueTarde);
estoqueUnico = []

estoqueCompleto.forEach(element => {
    if(!(estoqueUnico.includes(element))){
        estoqueUnico.push(element);
    }
});

console.log(estoqueUnico);
estoqueUnico.unshift('caju');
estoqueUnico.pop();
