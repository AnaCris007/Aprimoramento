// Classe Pilha
class Pilha {
    constructor() {
      this.itens = [];
    }
  
    empilhar(item) { //Adiciona um elemento no FINAL da pilha
      this.itens.push(item);
      console.log(`✔️ Elemento '${item}' empilhado.`);
    }
  
    desempilhar() { //Adiciona um elemento no FINAL da pilha
      if (this.estaVazia()) {
        console.log('⚠️ A pilha está vazia. Nada a desempilhar.');
        return null;
      }
      const removido = this.itens.pop();
      console.log(`❌ Elemento '${removido}' desempilhado.`);
      return removido;
    }
  
    topo() {
      if (this.estaVazia()) {
        return null;
      }
      return this.itens[this.itens.length - 1];
    }
  
    estaVazia() {
      return this.itens.length === 0;
    }
  
    tamanho() {
      return this.itens.length;
    }
  
    limpar() {
      this.itens = [];
      console.log('🧹 Pilha esvaziada.');
    }
  
    imprimir() {
      console.log('📦 Pilha atual:', this.itens.slice().reverse().join(' <- topo'));
    }
  }
  
  //Demonstração

  const pilha = new Pilha();
  pilha.empilhar('Livro A');
  pilha.empilhar('Livro B');
  pilha.empilhar('Livro C');
  pilha.empilhar('Livro D')
  pilha.desempilhar();
  console.log(pilha)
  pilha.limpar();
  pilha.imprimir();