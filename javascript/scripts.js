let ahora = new Date();


let cuadroRojo = document.getElementById("rojo");
cuadroRojo.innerHTML = "<h1>Time right now is:  " + ahora.getHours() + ":" + ahora.getMinutes() + ":" + ahora.getSeconds() + "</h1>";


const cambiarColor = (color) => {
    cuadroRojo.style.color = color;
}
