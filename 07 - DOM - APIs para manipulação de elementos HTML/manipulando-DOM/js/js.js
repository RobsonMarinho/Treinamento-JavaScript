var nomeBootInputText = window.document.getElementById("nomeBoot");

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
