var numerosAdivinhados = [];
var numeroParaAdivinhar = Math.floor(Math.random() * 21);
var respostaUm = "";
var i = 5;

console.log(
  `O jogo consiste em você tente adivinhar um número entre 0 e 10!\nATENÇÃO: VOCÊ TEM APENAS 5 TENTATIVAS!\nDigite "Sair" para encerrar!\n`
);

if (numeroParaAdivinhar % 2 == 0) {
  process.stdout.write(`DICA PRINCIPAL: O número escolhido é par\n`);
} else {
  process.stdout.write(`DICA PRINCIPAL: O número escolhido é impar\n`);
}

process.stdin.on("data", function (data) {
  respostaUm = data.toString().trim();

  if (respostaUm == "sair" || respostaUm == "Sair") {
    process.stdout.write(`Obrigado por jogar! Você adivinhou ${numerosAdivinhados.length} números, sendo eles: ${numerosAdivinhados}\n`);
    process.exit();
  }

  if (respostaUm == numeroParaAdivinhar) {
    process.stdout.write(
      `\nParabéns, você ganhou!\nO número era ${numeroParaAdivinhar}\n\nDigite "Sair" para encerrar.\nSe quiser continuar jogando escolha outro número!\n`
    );
    numerosAdivinhados.push(respostaUm);
    numeroParaAdivinhar = Math.floor(Math.random() * 11);
    i = 5;

    if (numeroParaAdivinhar % 2 == 0) {
      process.stdout.write(`DICA PRINCIPAL: O número escolhido é par\n`);
    } else {
      process.stdout.write(`DICA PRINCIPAL: O número escolhido é impar\n`);
    }
  } else {
    i = i - 1;
    process.stdout.write(
      `\nNão foi esse que eu adivinhei\nVocê tem mais ${i} tentativas\n`
    );
    numerosAdivinhados.push(respostaUm);
    if (Math.abs(numeroParaAdivinhar - respostaUm) <= 5) {
      process.stdout.write("voce ta perto\n");
    } else {
      process.stdout.write("você ta longe\n");
    }
  }

  if (i == 0) {
    process.stdout.write(
      `\nSuas tentativas acabaram! Estou escolhendo um novo número\n`
    );
    numeroParaAdivinhar = Math.floor(Math.random() * 11);
    i = 5;
    if (numeroParaAdivinhar % 2 == 0) {
      process.stdout.write(`DICA PRINCIPAL: O número escolhido é par\n`);
    } else {
      process.stdout.write(`DICA PRINCIPAL: O número escolhido é impar\n`);
    }
  }
});