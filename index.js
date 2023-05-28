function encriptar_text() {
    var letras      = [];
    var reemplazo   = '';
    var texto       = document.getElementById("caja-texto").value;    
    letras          = texto.split('');
    for (let i = 0; i < letras.length; i++){
        if (letras[i] == "a")
            reemplazo = reemplazo + 'ai';
        else if (letras[i] == "e")
            reemplazo = reemplazo + 'enter';
        else if (letras[i] == "i")
            reemplazo = reemplazo + 'imes';
        else if (letras[i] == "o")
            reemplazo = reemplazo + 'ober';
        else if (letras[i] == "u")
            reemplazo = reemplazo + 'ufat';
        else if (letras[i] == " ")
            reemplazo = reemplazo + ' ';
        else
            reemplazo = reemplazo + letras[i];
    }
    document.getElementById("cajatexto-munheco").value = reemplazo;
}

function desencriptar() {
    var texto = document.getElementById("cajatexto-munheco").value;
    var textoCifrado = texto.replace(/ai/gi, "a").replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("caja-texto").value = textoCifrado;
}

function copyClipboard() {
    // Get the text field
    var copyText = document.getElementById("cajatexto-munheco");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

//hoberlaimes chaimesvaimeslenters