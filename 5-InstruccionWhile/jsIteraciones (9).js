function mostrar()
{

var numero;
var maximo;
var minimo;
var flag =0;
var respuesta = "si";
do
{
	numero = parseInt(prompt("Ingrese un numero"));

	
	if( numero > maximo|| flag == 0)
	{
		maximo = numero;
	}
	if(numero< minimo||flag == 0)
	{
minimo = numero
flag = flag++; 
	}
	
	respuesta = prompt("Desea ingresar otro numero? ");
	respuesta = respuesta.toLowerCase();
	

}while (respuesta == "si");

document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;
}//FIN DE LA FUNCIÓN