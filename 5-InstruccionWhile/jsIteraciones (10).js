function mostrar()
{
var numero;
var respuesta;
var positivo = 0;
var negativo = 0;
var contadorp=0;
var contadorn=0;
var contadorc=0;
var pares =0;
var promediop;
var promedion=0;
var diferencia;

do 
{
numero = parseInt(prompt("Ingrese un numero"));
if (numero >0 )
{
	contadorp ++;
	positivo = positivo + numero;
}
else if(numero <0)
{
contadorn++;
negativo = negativo + numero;
}
else 
{
contadorc++;
}
if (numero % 2 == 0)
{
pares++;
}
respuesta = prompt("Quiere seguir ingresando numeros?");
}while (respuesta == "si");
if(contadorn == 0)
{
	promedion == 0
}
if (contadorp == 0)
{
	promediop ==0
}
promediop = positivo / contadorp;
promedion = negativo / contadorn;
diferencia = contadorp - contadorn; 

document.write("La suma de negativos es " + negativo + "<br>" ) ;
 document.write("La suma de positivos es" + positivo + "<br>");
 document.write("La cantidad de positivos es" + contadorp + "<br>");
 document.write("La cantidad de negativos es"+ contadorn + "<br>");
 document.write("La cantidad de ceros es "+ contadorc + "<br>");
 document.write("La cantidad de pares es"+ pares + "<br>");
 document.write("El promedio de los positivos es"+ promediop + "<br>");
 document.write("El promedio de los negativos es "+ promedion + "<br>");
document.write("La diferencia entre positivos y negativos es " +diferencia + "<br>");

}//FIN DE LA FUNCIÓN