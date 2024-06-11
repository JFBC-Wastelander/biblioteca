process.stdout.write(
  `Bem-vindo ao conversor de temperatura!\nDeseja converter de Celsius para Fahrenheit? Ou deseja converter de Fahrenheit para Celsius?\n`
);

var entrada;
var entradaCelsius;
var entradaFahrenheit;
var respostaFahrenheit;
var respostaCelsius;

process.stdin.on("data", function (data) {
  entrada = data.toString().trim();

  if (entrada == "sair" || entrada == "Sair") {
    process.exit();

  } if (
    entrada == "Celsius para Fahrenheit" ||
    entrada == "celsius para fahrenheit" ||
    entrada == "C para F" ||
    entrada == "c para f"
  ) {
    console.log(`Qual é a temperatura em Celsius?\n`);
    process.stdin.on("data", function (data) {
      entradaCelsius = Number(data.toString().trim());
      respostaFahrenheit = entradaCelsius * 1.8 + 32;
      console.log(`A temperatura é ${respostaFahrenheit}°F`);
      process.exit();
    });

  } else {
    console.log(`Qual é a temperatura em Fahrenheit?`);
    process.stdin.on("data", function (data) {
      entradaFahrenheit = Number(data.toString().trim());
      if (entradaFahrenheit > 0) {
        respostaCelsius = (entradaFahrenheit - 32) * 0.55;
        console.log(`A temperatura é de ${respostaCelsius}°C`);
        process.exit();
      }
    });
  }
});
