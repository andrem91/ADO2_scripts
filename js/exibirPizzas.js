

function exibirPizzas(pizzas) {
  const container = document.getElementById("pizza-container");
	let cardsHTML = "";

  pizzas.forEach((pizza) => {
    cardsHTML += `
		    <div class="col">
          <div class="card-pizza card h-100" type="button">
            <img src="${pizza.imagem}" class="card-img-top" alt="${pizza.sabor}" />
            <div class="card-body">
              <h5 class="card-title">${pizza.sabor}</h5>
              <p class="card-text">R$ ${pizza.preco.toFixed(2)}</p>
            </div>
          </div>
        </div>
		`;
  });
	container.innerHTML = cardsHTML;
}

exibirPizzas(pizzas);
