let matriz = [
    [5, 12, 7],
    [1, 14, 3]
];

let maior = matriz[0][0];

matriz.forEach(linha => {
    linha.forEach(valor => {
        if (valor > maior) {
            maior = valor;
        }
    });
});

console.log(`Maior valor na matriz: ${maior}`);