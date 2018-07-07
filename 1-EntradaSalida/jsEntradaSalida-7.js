/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
    var num1;
    var num2;
    var totals;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    totals = num1 + num2;
    alert("La suma es " + totals)

}
function restar()
{
    var num1;
    var num2;
    var totalr;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    totalr = num1 - num2;
    alert("La resta es " + totalr);
}

function multiplicar()
{
    var num1;
    var num2;
    var totalm;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    totalm = num1 * num2;
    alert("La multiplicacion es " + totalm);

}
function dividir()
{
    var num1;
    var num2;
    var totald;
    num1 = document.getElementById("numeroUno").value;
    num1 = parseInt(num1);
    num2 = document.getElementById("numeroDos").value;
    num2 = parseInt(num2);
    totald = num1 / num2;
    alert("La division es " + totald);
}