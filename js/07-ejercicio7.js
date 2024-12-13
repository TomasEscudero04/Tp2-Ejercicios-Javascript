// 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

// 303030303030303030303030303030303030303030303030303030303030
// 2929292929292929292929292929292929292929292929292929292929
// 28282828282828282828282828282828282828282828282828282828
// …..
// 333
// 22
// 1

let entrada = parseInt(prompt("Ingrese un numero entre 1 y 50"));

if (entrada > 0 && entrada <=50) {
    
    for (let i = entrada; i >= 1 ; i--) {
        let numero = "";

        for (let piramide = 0; piramide < i; piramide--) {
            numero += i;
            
        }
        document.write(numero);
        document.write("<br>");
    }

} else{
    alert("Ingrese un numero valido")
}