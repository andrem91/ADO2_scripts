function calcularTotalPedido() {
    const params = new URLSearchParams(window.location.search);
    let totalCompa = 0;
    params.forEach((value) => {
      totalCompa += Number(value);
    });

    const totalFormatado = totalCompa.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    document.getElementById("total").innerText =
      "Total da pedido: " + totalFormatado;
  }

  // Executa a função quando a página carrega
  window.onload = calcularTotalPedido;