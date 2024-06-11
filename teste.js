console.log("Bem vinda Julia, pra vc prosseguir com o comando digite seu nome completo DE MANEIRA CORRETA, caso contrário sofrerá as consequencias")
var i = 5
const numeroAdivinhado = 777

process.stdin.on("data", function (data){
    var entradaUsuario = data.toString().trim()
    if (entradaUsuario == "Julia Bim Copinski" || entradaUsuario == "julia bim copinski") {
        i = 5
        console.log("\nA partir de agora seu nome é Julia Bobinski\nQUAL É O SEU NOME?")
    } else {
        i = i - 1
        console.log(`Você acha que eu to brincando? Tem mais ${i} tentativas`)
    } if (i == 0) {
        console.log(`Você não deveria fazer brincadeiras comigo. Adeus`)
        process.exit()
    }
    if (entradaUsuario == "Julia Bobinski")
    console.log("Muito bem, Julia Bobinski, está na hora do meu jogo. Escolhi um número a dedo e você vai ter que adivinhar pra prosseguir\nSe tiver mt dificil, digite 'dica' pra te ajduar.")
    var entradaUsuario2 = data.toString().trim()
    if (entradaUsuario2 == numeroAdivinhado) {
        console.log("Agora misture seu novo nome com o número que eu adivinhei. Siga esse exemplo: NomeNumero (JuliaBobinski777)")
    } else if (entradaUsuario2 == "dica") {
        console.log("Meu número se repete 3 vezes, se não conseguir digite: 'segunda dica'")
    } else if (entradaUsuario2 == "segunda dica") {
        console.log("Meu número definitivamente não é par, se não conseguir digite: 'terceira dica'")
    } else if (entradaUsuario2 == "terceira dica") {
        console.log("slk vc é burra hein? o número ta entre 0 e 1000, se vc n conseguir digite: 'última dica'")
    } else if (entradaUsuario2 == "última dica") {
        console.log("burra kk. Um dos números é 7.\nDeseja rever suas dicas?")
    } else if (entradaUsuario2 == "Sim" || entradaUsuario2 == "sim" || entradaUsuario2 == "s"){
        console.log("O número se repete 3 vezes.\nO número não é par\nO número está entre 0 e 1000\nUm dos números é 7.")
    }
})