process.stdout.write("Qual é o seu nome? \n");

let nome = "";
let idade = "";
let temCnh = "";

process.stdin.on("data", function (data) {
  if (!pessoa.nome) {
    nome = data.toString().trim();

    process.stdout.write("Quantos anos você tem? \n");
  } else if (!pessoa.idade) {
    idade = data.toString().trim();

    process.stdout.write("Olá " + nome + ", você tem " + idade + " anos. \n");

    console.log("você tem CNH?");
  } else {
    temCnh = data.toString().trim();

    if (pessoa.temCnh == "sim") {
    } else {
      console.log("não pode dirigir");
    }

    process.exit();
  }
});
