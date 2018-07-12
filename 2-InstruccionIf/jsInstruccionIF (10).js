function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var max = 11;
	var min = 1;
	var numero = Math.floor(Math.random () * (max - min) + 1);

	if(numero == 9 && 10 )
	{
         alert("EXCELENTE");
	}
	else if (numero > 4 && numero < 9)
	{
		alert("APROBO");
	}
	else
	{
		alert("Vamos, la proxima se puede");
	}
}//FIN DE LA FUNCIÓN