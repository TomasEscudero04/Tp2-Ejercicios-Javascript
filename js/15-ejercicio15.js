// 15- Realiza un script que cuente el número de vocales que tiene un texto

let texto = prompt("Ingrese un texto cualquiera")

let vocales = 0;

texto = texto.toLowerCase();

for (let i = 0; i < texto.length; i++) {

    if (texto[i] === "a" ||
        texto[i] === "e" ||
        texto[i] === "i" ||
        texto[i] === "o" ||
        texto[i] === "u" ) {
        vocales++
    }
    
}
document.write("La cantidad de vocales encontradas es de: " + vocales);