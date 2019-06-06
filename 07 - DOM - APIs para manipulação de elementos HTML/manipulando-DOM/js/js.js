var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot");

function selecionarCampos() {
    console.log("typeof: " + typeof nomeBootInputText);
    console.log("object call " + Object.prototype.toString.call(nomeBootInputText));
    //alert(nomeBootInputText)
    console.log("recuperar valor com value: " + nomeBootInputText.value);
    //nomeBootInputText.disabled = true;
    console.log("disabled: nomeBootInputText.disabled = True;");
    nomeBootInputText.readOnly = true;
    console.log("disabled: nomeBootInputText.readOnly = True;");
    console.log("tagName: " + nomeBootInputText.tagName);
    console.log("tagName type: " + nomeBootInputText.type);
}

function selecionarCampoSelect() {
    console.log("object call " + Object.prototype.toString.call(estadoSelect));
    console.log("estadoSelect.value " + estadoSelect.value);
    console.log("estadoSelect.selectIndex " + estadoSelect.selectedIndex);
    console.log("tagName: " + estadoSelect.tagName);
    console.log("tagName type: " + estadoSelect.type);
    estadoSelect.selectedOptions;
    estadoSelect.selectedOptions.item(0);
    estadoSelect.selectedOptions[1];
    estadoSelect.length;
    estadoSelect.disabled = true;
}

var emailPromocionalCheck = document.querySelector("#emailPromocionalCheckBoot");

function selecionarCampoEmailCheck() {
    console.log("Object call tipo: ", Object.prototype.toString.call(emailPromocionalCheck));
    console.log("tagName: " + emailPromocionalCheck.tagName);
    console.log("tagName type: " + emailPromocionalCheck.type);
    console.log("Valor value: " + emailPromocionalCheck.value);
    console.log("Valor checked(marcado): " + emailPromocionalCheck.checked);   //O campo foi ou não marcado
}

var formaContatoRadio = document.querySelector("[name=formaContatoRadioBoot]");

function selecionarCamporRadio() {
    console.log("Object call tipo: ", Object.prototype.toString.call(formaContatoRadio));   //Verifica o tipo que vai retornar
    console.log("tagName: " + formaContatoRadio.tagName);
    console.log("tagName type: " + formaContatoRadio.type);
    console.log("Valor value: " + formaContatoRadio.value);
    console.log("Valor checked(marcado): " + formaContatoRadio.checked);   //O campo foi ou não marcado
}

var radios = document.getElementsByName("formaContatoRadioBoot");

function selecionarCamporRadios() {

    console.log("Object call tipo: ", Object.prototype.toString.call(radios));  
}

var checkeds = document.getElementsByClassName("checkbox");

var selects = document.getElementsByTagName("select");

var elementos = document.querySelectorAll("input[type=text]");