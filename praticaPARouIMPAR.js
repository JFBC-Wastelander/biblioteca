console.log("Digite um número ");

process.stdin.on("data", function (data) {
  let numero = Number(data.toString().trim());

  let ePar = numero % 2 == 0;
  if (ePar) {
    console.log("Seu número é par!");
  } else {
    console.log("Seu número é impar!");
  }
  process.exit();
});
