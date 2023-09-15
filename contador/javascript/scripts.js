const contador = document.getElementById("display");

const actualizarDisplay = (valorActual) => {
  contador.value = valorActual;
};

const reset = () => {
  actualizarDisplay(0);
};

reset();

const increase = () => {
  if (contador.value === "NO") {
    reset();
    return;
  }

  let valorActual = parseInt(contador.value) + 1;
  actualizarDisplay(valorActual);
};
const decrease = () => {
  let valorActual = parseInt(contador.value) - 1;
  if (valorActual >= 0) {
    actualizarDisplay(valorActual);
  } else if (valorActual < 0) {
    actualizarDisplay("NO");
  }
};
