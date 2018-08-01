/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var marca;
    var cantidad;
    var descuento;
    var precio= 35;
    var preciofinal;
    var ingresob;
cantidad = document.getElementById("Cantidad").value;
cantidad = parseInt(cantidad);
marca = document.getElementById("Marca").value;
    switch(cantidad)
    {
        case "1":
        case "2":
               preciofinal = 35
               break;
        case "3":
        if(marca == "ArgentinaLuz")
        {
            descuento = 15;
preciofinal = precio * descuento / 100;
        }
        else if(marca == "FelipeLamparas")
        {
            descuento = 10;
            preciofinal = precio * descuento / 100;
        }
        else 
        {
            descuento = 5;
            preciofinal = precio * descuento / 100;
        }break;
        case "4":
        if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
        {
            descuento = 25;
            preciofinal = precio * descuento / 100;
        }
        else 
        {
            descuento =20;
            preciofinal = precio * descuento / 100;
        }break;
        case "5":
        if(marca == "ArgentinaLuz")
        {
            descuento = 40; 
            preciofinal = precio * descuento / 100;
        }
        else 
        {
            descuento = 30;
            preciofinal = precio * descuento / 100;
        }
        case "6":
        {
            descuento = 50;
            preciofinal = precio * descuento / 100;
        }break;
        default:
        {
            descuento = 50; 
            preciofinal = precio * descuento / 100;
        }break;

    }
    document.getElementById("precioDescuento").value = 
 	
     if (preciofinal == 120)
     {

    ingresob = preciofinal * 10 / 100;
    preciofinal = preciofinal + ingresob;
     }
   
     alert ("IIBB Usted pago " + preciofinal );
}
