var prompt = require("prompt-sync")()

const cores =["azul","verde","vermelho","rosa","amarelo"];
const cor = (prompt(`Digite uma cor: `));

const posicao = cores.indexOf(cor.toLocaleLowerCase());
if(posicao !== -1){
    console.log(`A cor ${cor} está na posição ${posicao}.`)
}else{

    console.log(`Cor não encontrada.`)
}