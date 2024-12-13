// 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

let edad;

do {
  edad = parseInt(prompt("Ingrese su edad"))

  if (isNaN(edad)) {
    alert("Por favor, ingrese un numero válido");
  }
} while (isNaN(edad) || edad < 18);

if (edad >= 18) {
  alert("¡Felicidades! Ya tienes la edad necesaria para conducir");
}

