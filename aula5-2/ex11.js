let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let soma = 0;

matriz.forEach(linha => {
    linha.forEach(valor => {
        soma += valor;
    });
});

console.log(`Soma dos elementos da matriz: ${soma}`);