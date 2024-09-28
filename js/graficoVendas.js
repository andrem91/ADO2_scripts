const ctx = document.getElementById("meuGrafico").getContext("2d");
const meuGrafico = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Mussarela", "Calabresa", "Marguerita", "4 Queijos", "Pepperoni"],
    datasets: [
      {
        label: "Vendas",
        data: [150, 100, 30, 50, 80],
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            return (
              " R$ " +
              context.parsed.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            );
          },
        },
      },
      legend: {
        position: "left",
        labels: {
          font: { size: 18 },
        },
      },
      title: {
        display: true,
        text: "Taxa De Vendas Por Semana",
        font: { size: 26 },
        padding: { bottom: 30 },
      },
    },
    responsive: false,
    maintainAspectRatio: true,
  },
});
