
const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoencriptado = encriptar(textArea.value);
    mensaje.value = textoencriptado;
    textArea.value = "";
}

function btndesencriptar(){
    const textoencriptado = desencriptar(textArea.value);
    mensaje.value = textoencriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada=stringEncriptada.toLowerCase()
    
    for (let i =0; i < matrizcodigo.length;i++){
        if(stringEncriptada.includes(matrizcodigo [i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0],matrizcodigo[i][1])
        }
        
    }
    return stringEncriptada
}

function desencriptar (stringdesencriptada){
    let matrizcodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringdesencriptada=stringdesencriptada.toLowerCase()
    
    for (let i =0; i < matrizcodigo.length;i++){
        if(stringdesencriptada.includes(matrizcodigo [i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizcodigo[i][1],matrizcodigo[i][0])
        }
        
    }
    return stringdesencriptada
}

function copiarTexto() {
    var textarea = document.getElementById("mensajes");

  // Selecciona el texto dentro del textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copia el texto al portapapeles
    document.execCommand("copy");

  // Deselecciona el textarea
    textarea.blur();
    textarea.value = "";
    alert("Copiado satisfactorio");
    
}


