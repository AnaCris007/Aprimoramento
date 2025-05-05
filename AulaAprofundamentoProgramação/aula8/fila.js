class Fila {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item ao final da fila
    enfileirar(item) {
      this.itens.push(item);
      console.log(`📥 '${item}' entrou na fila.`);
    }
  
    // Remove o item do início da fila
    desenfileirar() {
      if (this.estaVazia()) {
        console.log('⚠️ A fila está vazia. Nenhum item para remover.');
        return null;
      }
      const removido = this.itens.shift();
      console.log(`🚪 '${removido}' saiu da fila.`);
      return removido;
    }
  
    // Mostra o primeiro da fila
    frente() {
      return this.itens[0];
    }
  
    // Verifica se a fila está vazia
    estaVazia() {
      return this.itens.length === 0;
    }
  
    // Tamanho da fila
    tamanho() {
      return this.itens.length;
    }
  
    // Limpa a fila
    limpar() {
      this.itens = [];
      console.log('🧹 Fila esvaziada.');
    }
  
    // Imprime a fila atual
    imprimir() {
      console.log('🚶‍♂️ Fila atual:', this.itens.join(' -> ') || 'vazia');
    }
  }
  
  // DEMONSTRAÇÃO

const fila = new Fila();
fila.enfileirar('Aluno 1');
fila.enfileirar('Aluno 2');
fila.enfileirar('Aluno 3');
fila.enfileirar('Aluno 4');
fila.enfileirar('Aluno 5');
fila.desenfileirar();
console.log(`O primeiro elemento da pilha é ${fila.frente()}`)
console.log(`Tamanho da fila: ${fila.tamanho()}`)
fila.desenfileirar();
fila.desenfileirar();
fila.desenfileirar();
fila.desenfileirar();
fila.imprimir();
