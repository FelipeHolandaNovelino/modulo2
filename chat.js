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



// const input = require("readline-sync");

// console.log("Vamos verificar a sua possibilidade de limite");

// const renda = input.question("Qual a sua Renda?");

// if (renda >= 1200 && renda <= 2500) {
//     console.log("O limite do seu cartão será R$:500")
// } else if (renda > 2500 && renda <= 4500) {
//     console.log("O limite do seu cartão será R$:1000")
// } else if (renda > 4500) {
//     console.log("O limite do seu cartão será R$:1500")
// } else {
//     console.log("Não poderemos te oferecer limites de crédito")
// };

const input = require("readline-sync");

 console.log("Acerte o número Secreto");
let chance = 2;
let chute = input.question("Digite seu Chute!!!");
const numeroAleatorio = Math.random() * 10;
const numeroSecreto = Math.round(numeroAleatorio);

while(chance <= 3 ) {
if (chute == numeroAleatorio) {
    console.log("Que Sorte Você Acertou")
    break;
} else {
    console.log("Você Errou !")
    let chute = input.question("Digite seu Chute!!!")
    chance++
};
}
