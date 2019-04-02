var contaStatus = false;
console.log("Status da conta:  ", contaStatus);

var contaStatus = true;
console.log("Status da conta: ", contaStatus);

//Verifica o tipo de dado via "typeof"
console.log(typeof contaStatus);

if(contaStatus == true){
    console.log("Enviar email!");
}else{
    console.log("Ative sua conta!");
}

console.log(!contaStatus);

var nome = "madson";
var preço = 22.8;
var vazio = "";

console.log(!!nome);
console.log(!!preco);
console.log(!!vazio);
console.log("-----");

//6 valores / objetos
console.log(!!""); //String vazio FALSE
console.log(!!0); //Sempre false
console.log(!!-0); //Sempre false
console.log(!!null); //Sempre false
console.log(underfined); //Sempre false
console.log(NaN);  //Sempre false
console.log(!!Array);//Sempre true
console.log(!!Object);//Sempre true
console.log(!!Function);//Sempre true