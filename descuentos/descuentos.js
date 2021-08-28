// const precioOriginal = 120;
// const descuento = 35;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}

function calculatePriceDiscount(){
    const price = document.getElementById("inputPrice");
    const priceValue = price.value;
    const discount = document.getElementById("inputDiscount");
    const discountValue = discount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resulPrice = document.getElementById("resultPrice")
    resulPrice.innerText = "EL precio con descuento es: $" + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,
// });
