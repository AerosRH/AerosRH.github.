//Helpers
function esPar(numero){
    return(numero % 2 === 0);
}

//Calculadora de mediana
function salariosMediana(lista){
    const mitad = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)){
        const salarioMitad1 = lista[mitad];
        const salarioMitad2= lista[mitad - 1];
        mediana = (salarioMitad1 + salarioMitad2) / 2;
    }else{
        mediana = lista[mitad];
    }
    return mediana;
}

//Mediana General
const salariosMX = mexico.map(
    function(persona){
        return persona.salary;
    }
);

const salariosMXOrder = salariosMX.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralMX = salariosMediana(salariosMXOrder);

//Mediana del top 10%


const sliceStart = parseInt((salariosMXOrder.length * 90) /100);
const sliceCount = parseInt(salariosMXOrder.length);
const salariosMXTop10 = salariosMXOrder.slice(sliceStart, sliceCount);

const medianaTop10MX = salariosMediana(salariosMXTop10);


console.log(
    medianaGeneralMX,
    medianaTop10MX,
);