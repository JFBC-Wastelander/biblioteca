const biblioteca = [];
var livro = {
  titulo: "",
  paginas: "",
  autor: "",
  genero: "",
};

console.log("Bem-vindo ao cadastro, informe o título do livro");
process.stdin.on("data", function (data) {
    entrada = data.toString().trim()
  if (entrada == "lista" || entrada == "Lista") {
    console.log(`Foi adicionado ${biblioteca.length} livros`)
    console.log(biblioteca);
    process.exit()
  }

  if (entrada == "remover" || entrada == "Remover") {
    console.log("Qual é o elemento que você deseja remover?")
    elemento = Number(data.toString().trim()) -1
    biblioteca.splice(elemento, 1)
    console.log(biblioteca)
  }

  if (!livro.titulo) {
    livro.titulo = data.toString().trim();
    process.stdout.write("Agora informe o número de páginas\n");
  } else if (!livro.paginas) {
    livro.paginas = data.toString().trim();
    process.stdout.write("Agora informe o autor do livro\n");
  } else if (!livro.autor) {
    livro.autor = data.toString().trim();
    process.stdout.write("Agora informe o gênero do livro\n")
  } else if (!livro.genero) {
    livro.genero = data.toString().trim()
    biblioteca.push(livro);
    livro = {
        titulo: "",
        paginas: "",
        autor: "",
        genero: "",
    };
    process.stdout.write("Livro cadastrado! \n")
    process.stdout.write("Se deseja adicionar outro livro, escreva seu título. Caso contrário digite lista!\n")
  }
});
