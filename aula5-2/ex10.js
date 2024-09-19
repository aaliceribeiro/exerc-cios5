let nomes = ["Alice", "Bruno", "Carlos", "Daniela", "Luciane", "Victor", "Ana", "Helena", "Igor", "Juliana"];

let nomeBuscado = prompt("Digite o nome que deseja procurar:");

if (nomes.includes(nomeBuscado)) {
    console.log("ACHEI");
} else {
    console.log("NÃO ACHEI");
}