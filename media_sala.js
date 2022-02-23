const cadastro = require("readline-sync");

const estudante = cadastro.question('Informe o nome do estudante: ');

const primeiraNota = parseFloat(cadastro.question('Insira a Nota 1 : '));
const segundaNota = parseFloat(cadastro.question('Insira a Nota 2 : '));
const terceiraNota = parseFloat(cadastro.question('Insira a Nota 3 : '));
const quartaNota = parseFloat(cadastro.question('Insira a Nota 4 : '));
const quintaNota = parseFloat(cadastro.question('Insira a Nota 5 : '));

const somaDasNotas = primeiraNota + segundaNota + terceiraNota + quartaNota + quintaNota ;

const media = somaDasNotas / 5 ;

console.log(parseFloat(media))


if(media > 6) {
    console.log('Aluno Aprovado')
}if(media < 6) {
    console.log('Aluno Reprovado')
}else{
    console.log('Digite um numero')
}