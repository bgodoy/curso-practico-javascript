/* const precioOriginal = 120;
const descuento = 18; */

function calcularPrecioConDscto (Precio, Descuento) {

    const porPrecioConDscto = 100 - Descuento;
    const precioConDscto = (Precio * porPrecioConDscto) / 100 ; 
    return precioConDscto;
}


/* console.log({
    precioOriginal,
    descuento, 
    porPrecioConDscto, 
    precioConDscto
}); */

function CalcularPrecio(){

    const InputPrecio = document.getElementById("InputPrice");
    const InputDiscount = document.getElementById("InputDiscount");

    const vInputPrecio = InputPrecio.value; 
    const vInputDiscount = InputDiscount.value;

    const ImporteFinal = calcularPrecioConDscto(vInputPrecio, vInputDiscount);

    const ObjetoImporte = document.getElementById("PImporte");

    ObjetoImporte.innerText = "El precio menos el descuento es de Q. " + ImporteFinal;


}