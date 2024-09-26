document.addEventListener("DOMContentLoaded", () => {
  const boasVindas = new bootstrap.Modal(
    document.getElementById("boasVindasModal")
  );
  boasVindas.show();
});

function atualizarRelogio() {
  const horaAtual = new Date();
  const horas = String(horaAtual.getHours()).padStart(2, "0");
  const minutos = String(horaAtual.getMinutes()).padStart(2, "0");
  const segundos = String(horaAtual.getSeconds()).padStart(2, "0");
  const relogio = document.getElementById("relogio");

  relogio.innerHTML = `${horas}:${minutos}:${segundos}`;
}
atualizarRelogio();
setInterval(atualizarRelogio, 1000);

function exibirData() {
  const dataAtual = new Date();

  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const diasDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  const ano = dataAtual.getFullYear();
  const mes = meses[dataAtual.getMonth()];
  const diaDoMes = dataAtual.getDate();
  const diaDaSemana = diasDaSemana[dataAtual.getDay()];

  const calendario = document.getElementById("calendario");

  calendario.innerHTML = `${diaDaSemana}, ${diaDoMes} de ${mes} de ${ano}`;
}

exibirData();
