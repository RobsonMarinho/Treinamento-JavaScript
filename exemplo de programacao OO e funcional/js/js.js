//programação funcional
function sejaBemVindo() {
    console.log("Seja bem vindo a formção JavaScript Mestre Jedi!!!");
}

console.log("Chamando a função sejaBemVindo():");
sejaBemVindo();

//POO
var objProfessor = {
    nome: "Prof. Madson Aguiar",
    curso: "Formação JavaScript",
    ministrarAula: function () {
        console.log("Ministrando aula de JavaScript!!");
    }
};

console.log("Objeto professor");
console.log(objProfessor);

console.log("acessando propriedades do objeto:");
console.log(objProfessor.nome);
console.log(objProfessor.curso);

console.log("Chamando o método do objeto professor: objProfessor.ministrarAula()");
objProfessor.ministrarAula();