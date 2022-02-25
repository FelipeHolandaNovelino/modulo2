const entrada = require("readline-sync");

const precoNumber = [4.0, 4.50, 5.00, 2.00, 1.50]; 

const valores = ['R$ 4,00 ', 'R$ 4,50 ',  'R$ 5,00', 'R$ 2,00', 'R$ 1,50']

const TabelacodigoProduto = [`1 - Cachorro Quente ${valores[0]}`, `2 - X-Salada ${valores[1]}`, `3 - X-Bacon ${valores[2]}`,
                                `4 - Torrada Simples ${valores[3]}`, `5 - Refrigerante ${valores[4]} `];

const interfaceTabela = ` Cardapio \n- ${TabelacodigoProduto[0]} \n- ${TabelacodigoProduto[1]} \n- ${TabelacodigoProduto[2]} \n- ${TabelacodigoProduto[3]} \n- ${TabelacodigoProduto[4]}`

console.log(interfaceTabela)

const Pedido = parseFloat(entrada.question('Qual o codigo do seu pedido? :')) -1;

const quantidade = parseFloat(entrada.question('Quantos itens deseja?: '));

const totalPedido = `O total do seu pedido foi R$:  ${parseFloat(precoNumber[Pedido] * quantidade)}`;

console.log(totalPedido)



