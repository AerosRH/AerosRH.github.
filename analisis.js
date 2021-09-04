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

function esPar(numero){
    return(numero % 2 === 0);
}

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

console.log(
    salariosMediana(salariosMXOrder)
);