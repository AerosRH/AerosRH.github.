// function calcularMediaAritmetica(lista) {

//     const sumaLista = lista.reduce(
//         function(valorAcumulado = 0, nuevoElemento) {
//             return valorAcumulado + nuevoElemento;
//         }
//     );

//     const promedioLista = sumaLista / lista.length;
//     return promedioLista;
// }
// // const lista1 = [
// //     100,
// //     500,
// //     50,
// //     700
// // ];

// const lista1 = [];

// function calcularMediana(){
//     const numbers = document.getElementById("inputNumbers");
//     const numberValue = parseInt(numbers.value);
//     agregar = lista1.push(numberValue);
//     numbers.value = "";
//     numbervalue = "";
//     function comparar (a, b){return a-b}
//     lista1.sort(comparar);
// }


// const mitadLista1 = parseInt(lista1.length / 2);

// function esPar(numero){
//     if (numero % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }

// let mediana;

// if (esPar(lista1.length)){
//     const elemento1 = lista1[mitadLista1];
//     const elemento2 = lista1[mitadLista1 -1];
//     const promedioElemento1y2 = calcularMediaAritmetica([
//         elemento1,
//         elemento2,
//     ]);

//     mediana = promedioElemento1y2;

// }else{
//     mediana = lista1[mitadLista1];
// }

function calcularMediana(valor){
    let array = valor.split(",");
    console.log(array);
    let listaOrdenada = array.sort((a, b) => a-b);
    console.log(listaOrdenada)
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;
    if(listaOrdenada.length % 2 ==0){
        let elemento1 = listaOrdenada[mitadLista];
        let elemento2 = listaOrdenada[mitadLista] - 1;
        mediana = (Number(elemento1) + Number(elemento2)) / 2;
    }else{
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

function datosMediana(){
    const numbers = document.getElementById("inputNumbers");
    const numberValue = numbers.value;
    let resultado = calcularMediana(numberValue);
    console.log(resultado);
}