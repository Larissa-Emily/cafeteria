// Menu
const open = document.querySelector(".bi-list");
const menuList = document.querySelector(".menu-list");
const close = document.querySelector(".bi-x");

// carrinho
const biCart = document.querySelector(".bi-cart2");
const butCar = document.querySelectorAll(".but-car");
const areaCarrinho = document.querySelector(".areaCarrinho");
const closeCar = document.querySelector(".bi-car-x");
const descrition = document.querySelectorAll(".descrition");

open.addEventListener("click", function () {
  menuList.style.display = "block";
  open.style.display = "none";
});

close.addEventListener("click", function () {
  open.style.display = "block";
  menuList.style.display = "none";
});

biCart.addEventListener("click", function () {
  areaCarrinho.style.display = "block";
});

closeCar.addEventListener("click", function () {
  areaCarrinho.style.display = "none";
});

let total = 0;

function adicionaCarrinho(nome, preco) {
  total += preco;
  const listItem = document.createElement("li");
  listItem.style.fontSize = "0.8em";
  listItem.textContent = `${nome} - R$${preco.toFixed(2)}`;
  areaCarrinho.appendChild(listItem);

  // Atualiza o total na interface do usuário
  const totalElement = document.getElementById("total");
  totalElement.textContent = total.toFixed(2);
}
