// const precioOriginal = 120;
// const descuento = 35;


function calcularPrecioConDescuento(precio, descuento, coupon){

    let couponDiscount;
    switch(coupon) {
        case "APPLE":
        couponDiscount = 10;
        break;
        case "MICROSOFT":
        couponDiscount = 15;
        break;
        case "GOOGLE":
        couponDiscount = 20;
        break;
    }

    const porcentajePrecioDescuento = 100 - descuento - couponDiscount;
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;

    return precioConDescuento;
}

function calculatePriceDiscount(){
    const price = document.getElementById("inputPrice");
    const priceValue = price.value;
    const discount = document.getElementById("inputDiscount");
    const discountValue = discount.value;
    const couponText = document.getElementById("inputCoupon");
    const couponValue = couponText.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, couponValue);

    const resulPrice = document.getElementById("resultPrice")
    resulPrice.innerText = "EL precio final es: $" + precioConDescuento;
}

// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioDescuento,
//     precioConDescuento,
// });
