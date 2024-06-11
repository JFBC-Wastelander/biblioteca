const listaNumero = ["1", "2", "3", "4", "5"]

let procurar;
listaNumero.forEach(function (listaNumero) {
  console.log(listaNumero);
})
console.log("\n Digite um número para verificar se está na lista! \n")

process.stdin.on("data", function (data){
  procurar = data.toString().trim()
  if (listaNumero.includes(procurar)) {
    console.log("Seu número está na lista")
  } else {
    console.log("Seu número não está na lista")
  }
  process.exit()
});
