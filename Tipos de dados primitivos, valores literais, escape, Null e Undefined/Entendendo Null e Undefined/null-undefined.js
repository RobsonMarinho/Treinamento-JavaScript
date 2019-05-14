var nome;
console.log(nome);
nome = "Prof. Robson"
console.log(nome);

nome = undefined; //Jamais usar
nome = null; //Liberar espaço em memória

console.log("undefined == null", undefined == null);
console.log("undefined", typeof undefined);
console.log("null", typeof null);
console.log("undefined === null", undefined === null);

//var idade;
//idade.nome;
var pessoa = {nome: 'pedro'};
console.log(pessoa.idade)
console.log(pessoa.idade.value)