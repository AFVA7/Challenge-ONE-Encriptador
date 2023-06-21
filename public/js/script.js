const textArea = document.querySelector(".text-area");
// const mensaje = document.querySelector(".mensaje");
const munheco = document.querySelector(".munheco");
const mensaje = document.querySelector(".mensaje");
const mesaje_right2 = document.querySelector(".mensaje-right2");
const botonCopiar = document.querySelector(".btn-copiar");
const right = document.querySelector("#right");

function btnEncriptar(){
  // mensaje.value = textoEncriptado;
  // mensaje.style.backgroundImage = "none"; 
  if(textArea.value != ""){
    reemplace(encriptar(textArea.value));
  }else{
    alert("Ingrese mensaje a encriptar");
    reset();
  }
}

function encriptar(stringEncriptada){
  let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar(){
  // mensaje.value = textoDesencriptado;
  // mensaje.style.backgroundImage = "none";
  if(textArea.value != ""){
    reemplace(desencriptar(textArea.value));
  }else{
    alert("Ingrese mensaje para desencriptar");
    reset();
  }
}

function desencriptar(stringDesencriptada){
  let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}
function btnCopiar(){
  mensaje.select();
  document.execCommand("copy");
  reset();
}

function reemplace(nuevoValor){
  mensaje.innerHTML = nuevoValor;
  munheco.classList.add("oculto");
  textArea.value = "";
  munheco.style.display = "none";
  mesaje_right2.style.display = "none";
  botonCopiar.style.display = "block";
  right.classList.add("ajustar");
  mensaje.classList.add("ajustar");
}

const reset = () => {
  mensaje.innerHTML = "";
  munheco.style.display = "block";
  mesaje_right2.style.display = "block";
  botonCopiar.style.display = "none";
  right.classList.remove("ajustar");
  mensaje.classList.remove("ajustar");
  munheco.classList.remove("oculto");
}