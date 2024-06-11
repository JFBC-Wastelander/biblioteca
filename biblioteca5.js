const biblioteca = []
var livro = {
    nome: "",
    pagina: "",
    autor: "",
    genero: "",
}

console.log("Bem-vindo a biblioteca!\nPara adicionar um livro informe seu título.\nPara remover tecle 'Remover'.\nPara ver os livros já listados tecle 'Lista'.")

process.stdin.on("data", function(data){
    entrada = data.toString().trim()
    switch (entrada) {
        case "Remover":
            //TODO adicionar comando de remover
        break
        case "Lista":
            console.log(`Você adicionou ${biblioteca.length} livros`)
            console.log(biblioteca)
        break
        case "Adicionar":
        
        break

    }
})