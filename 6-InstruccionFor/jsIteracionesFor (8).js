function mostrar()
{
var numero;

numero= parseInt(prompt("Ingrese un numero: "));
for(var i = 0 ;  i <=numero      ; i++   )
{
   if(numero % i != 0)
   {
alert("El numero es primo");
   }
else 
{
    alert("el numero NO es primo");
}
}

 
}//FIN DE LA FUNCIÓN