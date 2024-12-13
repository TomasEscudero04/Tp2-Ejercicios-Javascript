// 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.

let suma = 0;

do{
    let numero = prompt("Ingrese un numero");

    if(numero === null){
        break;
    } else if(!isNaN(numero) && numero.trim() !== ""){
        suma += +(numero);
    } else{
        alert(`El numero ingresado no es un numero valido`)
    }
}while (true);

document.write("Total: " + suma);