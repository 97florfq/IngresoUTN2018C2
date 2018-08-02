function mostrar()
{
var nota;
var sexo;
var notas=0;
var notabaja;
var sexonotabaja;
var promedio;
var varones =0;
var flag =0;
 for ( var i = 0; i < 5; i++)
 {
    nota = parseInt(prompt("Ingrese nota:"));
    while(nota < 0 || nota >10 || isNaN(nota) )
    {
        nota = parseInt(prompt("Error,reingrese nota:"));
    }
    sexo = prompt("Ingrese sexo: ");
    while(sexo != "f" && sexo != "m")
    {
        sexo =  prompt("Error, reingrese sexo: ");

    }
    notas = notas + nota;
    if(nota < notabaja || flag == 0)
    {
        notabaja = nota;
        sexonotabaja = sexo;

        flag++;
    }
    if(sexo == "m" && nota >=6)
    {
        varones++;
    }

 }
 promedio = notas / 5;
 
 alert("El promedio de las notas es " + promedio + "\n Nota mas baja: " + notabaja + "\n Sexo de la persona con la nota mas baja: " + sexonotabaja + "\n Cantidad de varones con nota mayor a 6: " + varones );
}
