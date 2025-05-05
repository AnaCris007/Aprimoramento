function cumprimentar (nome = 'visitante') {
    return `Bem-vindo, ${nome}!`
}

console.log(cumprimentar());
console.log(cumprimentar("Alice"));
console.log(cumprimentar('visitante'));