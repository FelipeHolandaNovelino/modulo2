const entrada = require("readline-sync");

const listaProdutos = ["Uva","Tomate", "Cenoura", "Acerola", "Alface", "Pimenta", "Cebola"];
const preco = [10.00, 6.00, 5.00, 3.00, 15.00, 20.00, 11.00 ];

console.log("Lista de Produtos")
for (i = 0; i <= 6; i++) {
    console.log(`${listaProdutos[i]} R$ ${preco[i]}`)

}

let produtoVerifica = entrada.question("Qual produto deseja verificar o dia de desconto?");

switch(produtoVerifica) {
    case "Uva":
    case "Cenoura":
    console.log("Sabados e domingo com 20% de desconto");
    break;
    case "Tomate":
    case "Cebola":
    console.log("Todas as segundas com 40% de desconto");
    break;
    case "Alface" :
    case "Pimenta":
    case "Acelora":
    console.log("Todas as Sextas com 15% de desconto")
}