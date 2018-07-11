
function mostrar()
{
var largo;
var ancho;
var perimetro;
largo = parseInt( prompt("Ingrese el largo"));
ancho = parseInt( prompt("Ingrese el ancho"));
perimetro = largo + ancho + largo + ancho;
alert("El perimetro es " + perimetro);
}
