const biblioteca = []
let livro = {}
let opcao = 0

console.log("Tecle 1 para inserir novo livro")
console.log("Tecle 2 para remover um livro")
console.log("Tecle 3 para ver a lista")
process.stdin.on("data", function (data){
    let entradaUsuario = data.toString().trim()
    if(!opcao) {
        opcao = Number(entradaUsuario)
        console.log("Digite enter para continuar")
    } else {
        switch (opcao) {
            case 1:
                if (!livro.nome) {
                    livro.nome = entradaUsuario
                    console.log("Insira o tamanho")
                } else if (!livro.tamanho) {
                    livro.tamanho = entradaUsuario
                    console.log("Insira o autor")
                } else if (!livro.autor) {
                    livro.autor = entradaUsuario
                    console.log("Insira o gênero")
                } else {
                    livro.genero = entradaUsuario
                    biblioteca.push(livro)
                    livro = {}
                    opcao = 0
                    console.log("Livro adicionado")
                }
            break;
            case 2:
                
            break;
            case 3:
                biblioteca.forEach(livro => {
                    console.log(livro)
                })
                opcao = 0
            break;
            default:
                console.log("Opção inválida")
                opcao = 0
                break;
        }
    }
})