const frase = "Anotaram a data da maratona"; //Frase escrita normalmente
const separaFrase = frase.split(" "); //.split("") separa uma string em uma array [ 'Anotaram', 'a', 'data', 'da', 'maratona' ]
const splitreverso = separaFrase.reverse();  //.reverse() inverte os indices dos elemento de uma array
const frasereversa = splitreverso.join(' '); //join() junta todos os elementos de um array em uma string e retorna esta string

console.log(frasereversa)