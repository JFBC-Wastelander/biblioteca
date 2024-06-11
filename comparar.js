const alunos = [
  {nome: "Ana", nota: 8.5},
  {nome: "Carlos", nota: 4.2},
  {nome: "Beatriz", nota: 6.8},
  {nome: "Daniel", nota: 7.0},
  {nome: "Ester", nota: 5.5},
]

for (let i = 0; i < alunos.length; i++) {
  if(alunos[i].nota >= 7) {
    console.log("o aluno " + alunos[i].nome + " foi aprovado")
  } else if (alunos[i].nota > 5 && alunos[i].nota < 7) {
    console.log("O aluno " + alunos[i].nome + " está na média")
  } else {
    console.log("O aluno " + alunos[i].nome + " foi reprovado")
  }
}