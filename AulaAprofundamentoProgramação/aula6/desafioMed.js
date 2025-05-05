let frutas = ['maçã', 'banana', 'laranja', 'uva'];
frutas.splice(frutas.indexOf('laranja'), 1);
frutas.forEach(element => {
    console.log(element);
});