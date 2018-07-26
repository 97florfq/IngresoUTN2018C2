function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var respuesta='si';

do{
numero = parseInt(prompt("Ingrese un numero"));
acumulador = acumulador + numero;
contador = contador + 1;
respuesta= prompt("Desea ingresar otro numero?");
respuesta = respuesta.toLowerCase();
}while (respuesta == "si");

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN