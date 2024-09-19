const elementoPresente = (vetor, elemento) => {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === elemento) {
            return true;
        }
    }
    return false;
};
