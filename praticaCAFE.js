console.log("Você gosta de café?");
let resposta = "";

process.stdin.on("data", function (data) {
  resposta = data.toString().trim();
  if (resposta == "sim") {
    console.log("Que bom");
  } else {
    console.log("Você é estranho");
  }
  process.exit();
});
