function encriptar() {
    var texto = document.getElementById("texto").value;
    var textoEncriptado = btoa(texto);
    document.getElementById("resultado").textContent = textoEncriptado;
  }
  
  function desencriptar() {
    var textoEncriptado = document.getElementById("texto").value;
    var textoDesencriptado = atob(textoEncriptado);
    document.getElementById("resultado").textContent = textoDesencriptado;
  }
  