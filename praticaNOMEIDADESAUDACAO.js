console.log(`Bem-vindo! Por favor insira seu nome \n`);

var usuário = {
  nome: "",
  idade: "",
};

process.stdin.on("data", function (data) {
  if (data.toString().trim() == "sair") {
    process.exit();
  }
  if (!usuário.nome) {
    usuário.nome = data.toString().trim();
    process.stdout.write(`Agora informe sua idade \n`);
  } else if (!usuário.idade) {
    usuário.idade = Number(data.toString().trim());
    process.stdout.write(
      `Olá ${usuário.nome}, você tem ${usuário.idade} anos, acertei? \n`
    );
  } else if (usuário.idade >= 18) {
    process.stdout.write(
      `Vejo que você tem mais de 18 anos, já pode ser preso hein? Escreva "sair" para encerrar \n`
    );
  } else {
    process.stdout.write(
      `Você é muito novo ainda, volte quando for mais velho. Escreva "sair" para encerrar \n`
    );
  }
});
