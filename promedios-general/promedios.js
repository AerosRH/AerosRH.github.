//Armonica

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
    const datos = document.getElementById("inputArmonica");
    console.log(datos);
    const datosValue = datos.value;
    let resultado = calcularArmonica(datosValue);
    let armonicaMenosDecimales = resultado.toFixed(4);
    const resultArmonica = document.getElementById("spaceArmonica");
    resultArmonica.innerText = "La armonica es: " + armonicaMenosDecimales;
    console.log(armonicaMenosDecimales);
};

//Mediana

function calcularMediana(valor){
    let array = valor.split(",");
    console.log(array);
    let listaOrdenada = array.sort((a, b) => a-b);
    console.log(listaOrdenada)
    const mitadLista = parseInt(listaOrdenada.length / 2);
    let mediana;
    if(listaOrdenada.length % 2 ==0){
        let elemento1 = listaOrdenada[mitadLista];
        let elemento2 = listaOrdenada[mitadLista - 1];
        mediana = (Number(elemento1) + Number(elemento2)) / 2;
    }else{
        mediana = listaOrdenada[mitadLista];
    }
    return mediana;
}

function datosMediana(){
    const numbers = document.getElementById("inputMediana");
    const numberValue = numbers.value;
    let resultado = calcularMediana(numberValue);
    const resultMediana = document.getElementById("spaceMediana");
    resultMediana.innerText = "La mediana es: " + resultado;
    console.log(resultado);
}

//Moda
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
    const numbers = document.getElementById("inputModa");
    const numberValue = numbers.value;
    let resultado = calcularModa(numberValue);
    const resultModa = document.getElementById("spaceModa");
    resultModa.innerText = "La moda es: " + resultado;
    console.log(resultado);
}

//Promedio
function calcularMediaAritmetica(valor) {
    let array = valor.split(",");
    console.log(array);
    lista = array.map(Number);
    console.log(lista);

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    console.log(promedioLista);
    return promedioLista;
}


function datosPromedio(){
    const numbers = document.getElementById("inputPromedio");
    const numberValue = numbers.value;
    let resultado = calcularMediaAritmetica(numberValue);
    let promedioMenosDecimales = resultado.toFixed(4);
    const resultPromedio = document.getElementById("spacePromedio");
    resultPromedio.innerText = "EL promedio es: " + promedioMenosDecimales;
    // console.log(resultado);
}
