console.log(`Trabalhando com Condicionais`);
const listaDeDestinos = new Array(
  `Salvador`,
  `São Paulo`,
  `Rio de Janeiro`,
  `Curitiba`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
  console.log("Comprador maior de idade");
  listaDeDestinos.splice(1, 1); //removendo item
} else if (estaAcompanhada) {
  console.log("Comprador está acompanhado");
  listaDeDestinos.splice(1, 1); //removendo item
} else {
  console.log("Não e maior de idade e não posso vender");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18); //Maior que
// console.log(idadeComprador < 18); // Menor que
// console.log(idadeComprador >= 18); // Maior ou Igual a que
// console.log(idadeComprador <= 18); // Menor ou Igua a que
// console.log(idadeComprador == 18); // Igual
