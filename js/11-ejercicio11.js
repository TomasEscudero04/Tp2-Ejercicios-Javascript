// 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

// Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp

let nombre1 = prompt("Ingrese un primer nombre")
let nombre2 = prompt("Ingrese un segundo nombre")
let nombre3 = prompt("Ingrese un tercer nombre")

let edad1 = parseInt(prompt("Ingrese la edad de " + nombre1))
let edad2 = parseInt(prompt("Ingrese la edad de " + nombre2))
let edad3 = parseInt(prompt("Ingrese la edad de " + nombre3))

let mayor = Math.max(edad1, edad2, edad3);

if (mayor === edad1) {
    alert("El mayor es " + nombre1)
}
if (mayor === edad2) {
    alert("El mayor es " + nombre2)
}
if (mayor === edad3) {
    alert("El mayor es " + nombre3)
}