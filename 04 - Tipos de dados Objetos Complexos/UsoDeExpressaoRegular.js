var regexpLiteral = /JS/; //literal
var regexpConstrutor = new RegExp("J");

var stringCurso = "Formação Completa JavaScipt - Mestre JS Jedi";

console.log(regexpLiteral.test(stringCurso));
console.log(regexpConstrutor.exec(stringCurso));    //Método exec realiza pesquisa e retorna a primeira que achar
