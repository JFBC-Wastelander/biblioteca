const listaDeCompras = [];

listaDeCompras.push("Farinha");
listaDeCompras.push("Trigo");
listaDeCompras.push("Peito de Frango");
listaDeCompras.push("Peixe");
listaDeCompras.push("Leite");
listaDeCompras.push("Alface");
listaDeCompras.push("Batata");

let pesquisa = "";

process.stdout.write(`O que deseja procurar? \n`);
console.log(listaDeCompras);

process.stdin.on("data", function (data) {
  let pesquisa = data.toString().trim();
  if (listaDeCompras.includes(pesquisa)) {
    console.log("\n O item está dentro da lista");
  } else {
    console.log("\n O item está fora da lista");
  }
  process.exit();
});