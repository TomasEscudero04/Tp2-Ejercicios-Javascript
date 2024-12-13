// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

for (let i = 1; i <= 30; i++) {
    let numero = "";

    for (let pirámide = 0; pirámide < i; pirámide++) {
        numero += i;
        
    }
    document.write(numero);
    document.write("<br>");
    
}