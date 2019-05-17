//literal
var itens = {}
var itens2 = { nome: "refrigerante", preco: 22, ativo: true, detalhes: { detalhe: '...' } };

//Construtor
var pessoa = new Object();
pessoa.nome = "João";
pessoa.idade = 44;

//Accessar
console.log(itens2.nome);
console.log(itens2.preco);
console.log(itens2['ativo']);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(itens2.detalhes.detalhe);