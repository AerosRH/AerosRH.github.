// const lista1 = [
//     100,
//     200,
//     300,
//     500,
// ];


function calcularMediaAritmetica(valor) {
    // let sumaLista = 0;
    // // for (let i = 0; i < lista.length; i++){
    // //     sumaLista = sumaLista + lista[i];
    // // }
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
    const numbers = document.getElementById("inputNumbers");
    const numberValue = numbers.value;
    let resultado = calcularMediaAritmetica(numberValue);
    const resultPromedio = document.getElementById("resultPromedio");
    resultPromedio.innerText = "EL promedio es: " + resultado;
    console.log(resultado);
}