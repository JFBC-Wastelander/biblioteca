const listaDeCompras = [];

listaDeCompras.push("Leite")
listaDeCompras.push("Peito de Frango")
listaDeCompras.push("Pão")
listaDeCompras.push("Alface")

let pesquisa = "";

process.stdout.write("O que deseja comprar? \n")
process.stdin.on("data", function(data){
    let pesquisa = data.toString().trim()
    if (listaDeCompras.includes(pesquisa)){
        console.log("\n O item está dentro da lista \n")
    } else {
        console.log("O item está fora da lista")
    }
    process.exit()
})
