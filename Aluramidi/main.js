function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);
  if (elemento != null && elemento.localName === "audio") {
    elemento.play();
  } else {
    console.log("Elemento não encontrado ou seletor inválido");
  }
}
const listaDeTeclas = document.querySelectorAll(".tecla");

//para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
  const intrumento = tecla.classList[1];
  //templete string
  const idAudio = `#som_${intrumento}`;

  tecla.onclick = function () {
    tocaSom(idAudio);
  };

  tecla.onkeydown = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.add("ativa");
    }
  };

  tecla.onkeyup = function (evento) {
    if (evento.code === "Space" || evento.code === "Enter") {
      tecla.classList.remove("ativa");
    }
  };
}
