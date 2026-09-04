const inputPersonas = document.getElementById("numPersonas");
const btnMas = document.getElementById("btnMas");
const btnMenos = document.getElementById("btnMenos");

const min = 1;
const max = 10; //capacidad del restaurante

btnMas.addEventListener("click", () => {
  let valor = parseInt(inputPersonas.value);
  if (valor < max) {
    inputPersonas.value = valor + 1;
  }
});

btnMenos.addEventListener("click", () => {
  let valor = parseInt(inputPersonas.value);
  if (valor > min) {
    inputPersonas.value = valor - 1;
  }
});