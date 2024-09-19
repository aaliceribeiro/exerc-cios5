const encontrarMaiorNumero = (vetor) => {
    let maiorNumero = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maiorNumero) {
            maiorNumero = vetor[i];
        }
    }

    alert(maiorNumero);
};
