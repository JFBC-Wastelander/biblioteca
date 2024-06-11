console.log("Vamos adicionar um número e fazer a média")

let numeros = [];
let numero = "";
let soma = "";

process.stdin.on("data", function (data) {
    let numero = Number(data.toString().trim())

    numeros.push(numero)

    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma =+ numeros[i]
    }
    console.log("Média: " + soma / numeros.length)
})
 
/*
console.log("Vamops adicionar alguns números e fazer sua média")

const numeros = []

process.stdin.on("data", function (data) {
let numeros = Number(data.toString().trim())

numeros.push(numeros)

})
*/