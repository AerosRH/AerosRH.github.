// const lista = [
//     87,
//     98,
//     100,
//     70,
//     124,
//     156,
//     98,
//     87,
// ];



function calcularArmonica(array){
    let listaTexto = array.split(",");
    console.log(listaTexto);
    let lista = listaTexto.map(Number);
    console.log(lista);
    let suma = 0;
    for(let i = 0; i < lista.length; i++){
        suma = suma + (1 / lista[i]);
    }

    const resultArmonica = lista.length / suma;
    return resultArmonica;
};





function datosArmonica(){
    const datos = document.getElementById("inputNumbers");
    console.log(datos);
    const datosValue = datos.value;
    let resultado = calcularArmonica(datosValue);
    console.log(resultado);
};