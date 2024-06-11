const alunos = [];
var aluno = {
  nome: "",
  idade: "",
  curso: "",
};
console.log("Bem-vindo ao cadastro, informe seu nome!");
process.stdin.on("data", function (data) {
  if (data.toString().trim() == "sair") {
    console.log(alunos);
    process.exit();
  }
  if (!aluno.nome) {
    aluno.nome = data.toString().trim();
    process.stdout.write("\nAgora informe sua idade! \n");
  } else if (!aluno.idade) {
    aluno.idade = data.toString().trim();
    process.stdout.write("\nAgora informe seu curso! \n");
  } else if (!aluno.curso) {
    aluno.curso = data.toString().trim();
    alunos.push(aluno);
    aluno = {
      nome: "",
      idade: "",
      curso: "",
    };
    process.stdout.write("\nAluno cadastrado! \n")
    process.stdout.write("Se deseja adicionar outro aluno, escreva seu nome. Caso contrário digite sair! \n")
  }
});
