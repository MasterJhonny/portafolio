document.addEventListener("DOMContentLoaded", function () {
  const textoDev = document.getElementById("dev");
  const textoCompletoDev = textoDev.textContent;
  textoDev.textContent = "";

  let i = 0;
  function escribirTexto(textoElement, fulltexto) {
    if (i < fulltexto.length) {
      textoElement.textContent += fulltexto.charAt(i);
      i++;
      setTimeout(() => escribirTexto(textoElement, fulltexto), 100); // Ajusta el tiempo para controlar la velocidad de escritura
    }
  }

  escribirTexto(textoDev, textoCompletoDev);
  // escribirTexto(textoName, textoCompletoName);
});

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  alert("Enviando formulario");
  form.reset();
});
