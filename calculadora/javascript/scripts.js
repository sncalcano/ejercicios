// let ahora = new Date();

// let cuadroRojo = document.getElementById("rojo");
// cuadroRojo.innerHTML = "<h1>Time right now is:  " + ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds() + "</h1>";

// const cambiarColor = (color) => {
//     cuadroRojo.style.color = color;
// }

let num1 = "";
let num2 = "";
let operacion = "";

const agregarNumero = (numero) => {
  if (operacion === "") {
    num1 += numero;
    actualizarDisplay(num1);
  } else {
    num2 += numero;
    actualizarDisplay(num2);
  }
};

const actualizarDisplay = (numero) => {
  document.getElementById("display").value = numero;
};

const guardarOperacion = (suma) => {
  operacion = suma;
  actualizarDisplay("");
};

const borrarTodo = () => {
  actualizarDisplay("");
  num1 = "";
  num2 = "";
  operacion = "";
};

const realizarOperacion = () => {
  if (num1 != "" && num2 != "") {
    let resultado = parseInt(num1) + parseInt(num2);
    actualizarDisplay(resultado);
  } else {
    actualizarDisplay("ERROR");
  }
};
