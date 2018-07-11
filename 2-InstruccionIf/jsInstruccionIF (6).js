function mostrar()
{
//tomo la edad  
var edad;
edad = document.getElementById("edad").value;
edad = parseInt(edad);
   if(edad >=18)
   {
       alert("La persona es adulto");
   }

   else if(edad >=13 && edad <=17)
{
    alert("La persona es adolescente");

}

else 
{
    alert("La persona es niño");
}
}//FIN DE LA FUNCIÓN