process.stdout.write("Qual é o seu nome? \n")

let pessoa = {
    nome: "",
    idade: "",
    temCnh: ""
}

process.stdin.on("data", function (data) {
  if (!pessoa.nome) {
    pessoa.nome = data.toString().trim();

    process.stdout.write("Quantos anos você tem? \n");
  } else if (!pessoa.idade) {
    pessoa.idade = data.toString().trim();

    process.stdout.write("Olá " + pessoa.nome + ", você tem " + pessoa.idade + " anos. \n");

    console.log("você tem CNH?");
  } else {
    pessoa.temCnh = data.toString().trim();

    if (pessoa.temCnh == "sim") {
    } else {
      console.log("não pode dirigir");
    }

    process.exit();
  }
});
