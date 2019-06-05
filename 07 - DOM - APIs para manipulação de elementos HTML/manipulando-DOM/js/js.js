var nomeBootInputText = window.document.getElementById("nomeBoot");
var estadoSelect = document.getElementById("estadoSelectBoot");

function selecionarCampos() {
    console.log("typeof: " + typeof nomeBootInputText);
    console.log("object call " + Object.prototype.toString.call(nomeBootInputText));
    //alert(nomeBootInputText)
    console.log("recuperar valor com value: " + nomeBootInputText.value);
    //nomeBootInputText.disabled = true;
    console.log("disabled: nomeBootInputText.disabled = True;")
    nomeBootInputText.readOnly = true;
    console.log("disabled: nomeBootInputText.readOnly = True;")
    console.log("tagName: " + nomeBootInputText.tagName);
    console.log("tagName type: " + nomeBootInputText.type);
}

function selecionarCampoSelect() {
    console.log("object call " + Object.prototype.toString.call(estadoSelect));
    console.log("estadoSelect.value " + estadoSelect.value)
    console.log("estadoSelect.selectIndex " + estadoSelect.selectedIndex);
    console.log("tagName: " + estadoSelect.tagName);
    console.log("tagName type: " + estadoSelect.type);
    estadoSelect.selectedOptions
    estadoSelect.selectedOptions.item(0)
    estadoSelect.selectedOptions[1]
    estadoSelect.length
    estadoSelect.disabled = true

}