//Declaração de variáveis
var nome = "Ricardo";
var sobreNome = "Aguiar Luz";

console.log("Instrução solta em um arquivo JS");

//Exibe no console o nome
function exibirNomeConsole() {
    console.log("exibir nome: " + nome);
}

//Função exbir nome completo
function exibirNomeCompleto() {
    console.log("Programador, nome completo: " + nome + " " + sobrenome);
}

function eventoClick() {
    alert("Você clicou em um botão! ");
}

//chama função
exibirNomeConsole();
