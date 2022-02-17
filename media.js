const input = require("readline-sync");
console.log("Vamos verificar a sua média do semestre?");

const notas = input.question("informe quantas notas teve nesse semestre :");

const totaldisciplinas = parseFloat(notas)

let contador = 1;
let totalNotaSemestre = 0;


while(contador <= totaldisciplinas) {
    let nota = parseFloat(input.question("Digite a nota = "));
    totalNotaSemestre = totalNotaSemestre + (nota);
    contador++;
}

let media = totalNotaSemestre / totaldisciplinas;

console.log(`Sua média é : ${media}`)



if (media > 6) {
    console.log("Aluno Aprovado!")
}else if (media < 6 ) {
  console.log("Aluno Reprovado")
}

