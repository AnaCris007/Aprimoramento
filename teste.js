function contarSegredo() {
    nome = 'Ana';
    console.log("Eu sou: " + this.nome);
  }
  
contarSegredo(); // No navegador: "Eu sou: undefined" (ou "Eu sou: nome do window")
  