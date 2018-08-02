/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estadocivil;
    var sueldob;
    var legajo;
    var nac;

    edad = parseInt(prompt("Ingrese su edad:"));

    while (edad <=18 || edad >=90)
    {
        edad = parseInt(prompt("Error, reingrese su edad;"));
    }
    document.getElementById("Edad").value = edad;

    sexo = prompt("Ingrese su sexo (F o M):");
    while (sexo != "F" && sexo != "M")
    {
        sexo = prompt("Error, reingrese su sexo")
    }
    document.getElementById("Sexo").value = sexo;

    estadocivil = prompt("Ingrese su estado civil : ");
    switch (estadocivil)
    {
        case "soltero":    estadocivil = "soltero"
        document.getElementById("EstadoCivil").value = estadocivil;
        break;
        case "casado":    estadocivil = "casado"
        document.getElementById("EstadoCivil").value = estadocivil;
        break;
        case "divorciado":    estadocivil = "divorciado"
        document.getElementById("EstadoCivil").value = estadocivil;
        break;
        case "viudo":    estadocivil = "viudo"
        document.getElementById("EstadoCivil").value = estadocivil;
        break;
    }
    sueldob = parseInt(prompt ("Ingrese su sueldo bruto"));
    while (sueldob <8000)
{
sueldob = parseInt(prompt("Error, reingrese su sueldo bruto:"));
}
document.getElementById("Sueldo").value = sueldob

legajo = parseInt(prompt("Ingrese numero de legajo"));
while (legajo <999 || legajo >9999)
{
    legajo = parseInt(prompt("Error, reingrese numero de legajo"));

}
document.getElementById("Legajo").value = legajo

nacionalidad = prompt ("Ingrese su nacionalidad : A = Argentino - E = extranjero - N = Nacionalizado");
switch (nacionalidad)
{
    case "A":
    nacionalidad = "Argentino"
    document.getElementById("Nacionalidad").value = nacionalidad;
    break;
    case "E":
    nacionalidad = "Extranjero"
    document.getElementById("Nacionalidad").value = nacionalidad;
    break;
    case "N":
    nacionalidad = "Nacionalizado"
    document.getElementById("Nacionalidad").value = nacionalidad;
    break;
}


}

