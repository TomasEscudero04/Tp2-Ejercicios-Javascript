// 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

// Ejemplo:
// Input: Hola mundo
// Output: la vocal ‘o’ está en la posición 1


let texto = prompt("Ingrese un texto cualquiera");

let vocales = ["a", "e", "i", "o", "u"];

let posiciónVocal = -1;

for (let i = 0; i < texto.length; i++) {
    
    if (vocales.includes(texto[i])) {
        posiciónVocal = i;
        break
    }
}

if (posiciónVocal !== -1) {
    document.write(`La vocal ${texto[posiciónVocal]} está en la posicion ${posiciónVocal}`);

} else{
    document.write("No se encontró ninguna vocal")
}