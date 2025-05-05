function executarOperacao(a,b, operacao) {
    return operacao(a, b);
}

const dividir = (a, b) => a/b;

console.log(executarOperacao( 10,2, dividir));