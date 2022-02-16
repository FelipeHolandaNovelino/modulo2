// const input = require("readline-sync");

// console.log("Seja bem vinde! Vamos começar seu cadastro!")

// const idade = input.question("Qual a sua idade?");

// if (idade >= 16 && idade < 18) {
//     console.log("Acesso Permitido Sem consumo Alcoólico")
// }  else if (idade >= 18) {
//     console.log("Acesso Permitido Com Consumo Alcoólico")
// }   else {
//     console.log("Acesso ão Permitido")
// };

//esse seria uma operadora de cartão de credito ao analisar a renda e o limite que teria o cartão

const input = require("readline-sync");

console.log("Vamos verificar a sua possibilidade de limite?");

const renda = input.question("Informe a sua Renda! R$ :");

  if (renda >= 1200 && renda <= 2500) {
    console.log("O limite do seu cartão será R$:500"); 
  } else if (renda > 2500 && renda <= 4500) {
    console.log("O limite do seu cartão será R$:1000"); 
  } else if (renda > 4500) {
    console.log("O limite do seu cartão será R$:1500"); 
  } else if (renda < 1200) {
    console.log("Não poderemos te oferecer limites de crédito")
  } else {
  console.log("Digite um numero!");
}



//esse é um jogo para acertar um número secreto que eu estava fazendo no final da aula mas nao consegui fazer todo

/*const input = require("readline-sync");
console.log("Acerte o número Secreto");

function sorteia() {

    return Math.round(Math.random() * 10);

 };
const numeroSecreto = sorteia();

let chute = input.question("Digite seu Chute de 1 a 10!! =>> ");

let chance = 2;

while(chance <= 3 ) {
   
if (chute == numeroSecreto) {
    console.log("Que Sorte Você Acertou")
    break;
} else if (chute != Number) {
    let chute = input.question("Digite um numero!!!")
    else {
    console.log("Você Errou !")
    let chute = input.question("Digite seu Chute!!!")
    chance++
}
};

if (chance > 3) {
 console.log("Acabaram suas chances")
 
};*/
