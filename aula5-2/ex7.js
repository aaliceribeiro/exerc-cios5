const calcularMedia = (vetor) => {
    if (vetor.length === 0) {
        alert('O vetor está vazio.');
        return;
    }

    let soma = 0;

    for (let i = 0; i < vetor.length; i++) {
        soma += vetor[i];
    }

    let media = soma / vetor.length;
    alert(media);
};
