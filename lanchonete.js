const entrada = require("readline-sync");

const preco = [4.0, 4.50, 5.00, 2.00, 1.50]; 

//const codigo = [1, 2, 3, 4 , 5];

const Pedido = parseFloat(entrada.question('Qual o codigo do seu pedido? :')) -1;

const quantidade = parseFloat(entrada.question('Quantos itens deseja?: '));

const totalPedido = `O total do seu pedido foi R$:  ${parseFloat(preco[Pedido] * quantidade)}`;

console.log(totalPedido)



