//Conceito de wrapper primitivos

var valorString = "Curso JS Mestre Jedi";
console.log(valorString.substring(0, 5)); //0=começo e 5= qtd de ctrer

//Processo Wrapper
var valorStringTemp = new String(valorString);
var substr = valorStringTemp.substr(0, 5);
valorStringTemp = null;
console.log(substr);
substr = null;