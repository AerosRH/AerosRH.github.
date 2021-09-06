// const lista1 = [
//     1,
//     2,
//     3,
//     3,
//     4,
//     3,
//     2,
//     4,
//     1,
//     1,
//     4,
//     2,
//     1,
//     2,
//     2,
//     3,
//     2,
//     4,
//     4,
//     4,
// ];



// const lista1Count = {}
// lista1.map(
//     function (elemento){
//         if(lista1Count[elemento]){
//             lista1Count[elemento] += 1;
//         }else{
//             lista1Count[elemento] = 1;
//         }
//     }
// );

// const lista1Array = Object.entries(lista1Count).sort(
//     function(elementoA, elementoB){
//         return elementoA[1] - elementoB[1];
//     }
// );
// const moda = lista1Array[lista1Array.length - 1];

///Nueva forma de hacerlo

function calcularModa(valor){
    let array = valor.split(",");
    console.log(array);
    let listaOrdenada = array.sort((a, b) => a-b);
    console.log(listaOrdenada)
    lista = listaOrdenada.map(Number);
    console.log(lista);

    const listaCount = {};
    lista.map(
        function (elemento){
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );
    console.log(listaCount);


    const listaArray = Object.entries(listaCount).sort(
        function(elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    console.log(listaArray)
    const modaElementos = listaArray[listaArray.length -1 ];
    const moda = modaElementos[0];
    return moda;

}

function datosModa(){
    const numbers = document.getElementById("inputNumbers");
    const numberValue = numbers.value;
    let resultado = calcularModa(numberValue);
    const resultModa = document.getElementById("resultModa");
    resultModa.innerText = "La moda es: " + resultado;
    console.log(resultado);
}

// const listaCount = {};

// const calcularModa = (elementos) => {
//     let array = elementos.split(",");
//     console.log(array);
//     let contandoElementos = array.map(elemento => {
//         if(listaCount[elemento]){
//             listaCount[elemento] += 1;
//         }
//         else {
//             listaCount[elemento] = 1;
//         }
//     })
//     contandoElementos = Object.entries(listaCount);
//     console.log(contandoElementos);
//     let menorAmayor = contandoElementos.sort((a, b) => a[1] - b[1]);
//     console.log(menorAmayor);
//     const moda = menorAmayor[menorAmayor.lenght - 1];
//     console.log(moda);
// }

// function datosModa(){
//     const numbers = document.getElementById("inputNumbers");
//     const numberValue = numbers.value;
//     let resultado = calcularModa(numberValue);
//     console.log(resultado);
// }