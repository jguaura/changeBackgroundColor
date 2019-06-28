// Seleccionar los elementos del DOM con los que vamos a trabajar
const container = document.querySelector(".container");
const boton = document.querySelector(".clickMe");

// Crear un array que contenga los colores por los que vamos a cambiar el fondo
const colores = ["black", "skyblue", "red", "yellow", "limegreen", "crimson"];

// Event Listener y funcionalidad para el boton
boton.addEventListener("click", () => {
  //Crear un numero random para asignar al container cada vez que hagamos click en el boton
  let random = Math.floor(Math.random() * colores.length);

  //asignar el numero creado a la iteracion del array colores
  container.style.backgroundColor = colores[random];
});
