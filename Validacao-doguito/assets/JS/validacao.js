const dataNascimento = document.querySelector("#nascimento");

dataNascimento.addEventListener("blur", (evento) => {
  validaDataNascimeneto(evento.target);
});

function validaDataNascimeneto(input) {
  const dataRecebida = new Date(input.value);
  let mensagem = "";

  if (maiorQue18(dataRecebida)) {
    mensagem = "Você deve ser maior que 18 anos para  se cadastrar";
  }
}

function maiorQue18(data) {
  const dataAtual = new Date();
  const dataMais18 = new Date(
    data.getUTCFullYear() + 18,
    data.getUTCMonth(),
    data.getUTCDate()
  );

  return dataMais18 <= dataAtual;
}
