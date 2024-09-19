function criarVetorAlternado(n) {
    const vetor = [];
  
    for (let i = 0; i < n; i++) {
      vetor[i] = i % 2 === 0 ? "Par" : "Ímpar";
    }
  
    return vetor;
  }