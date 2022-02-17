const input = require("readline-sync");  //media dos alunos
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


// contador de letrasem uma string

let frase = "A TURMA DO BACKEND DO SENAC, É MASSA!"
console.log(frase.length)

//Frase reversa

const frase = "Anotaram a data da maratona"; //Frase escrita normalmente
const separaFrase = frase.split(" "); //.split("") separa uma string em uma array [ 'Anotaram', 'a', 'data', 'da', 'maratona' ]
const splitreverso = separaFrase.reverse();  //.reverse() inverte os indices dos elemento de uma array
const frasereversa = splitreverso.join(' '); //join() junta todos os elementos de um array em uma string e retorna esta string

console.log(frasereversa)