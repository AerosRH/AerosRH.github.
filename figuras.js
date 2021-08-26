//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado()

function areaCuadrado(lado){
    return lado * lado;
}

//Codigo del triangulo
console.group("Triangulo");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// const altura = 5.5;
// console.log("Los lados del triangulo miden: "
//     + ladoTriangulo1 
//     + "cm, " 
//     + ladoTriangulo2 
//     + "cm y " 
//     + baseTriangulo 
//     +"cm"
// );
// console.log("La altura del triangulo es de: " + altura + " cm");
function perimetroTriangulo(lado1, lado2 , base){
    return (Number(lado1) + Number(lado2) + Number(base));
}

function areaTriangulo(altura, base){
    return (Number(base) * Number(altura)) / 2;
}
console.groupEnd();

console.group("Circulo");

// //radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");

//diametro
function diametroCirculo(radio){
    return radio * 2;
}
//pi
const pi = Math.PI;

//circunferencia

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * pi;
}

//area
function areaCirculo(radio){
    return (radio * radio) * pi;
}

console.groupEnd();

//Empezando con HTML 
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado"); //Permite obtener ese elemento HTML en JS
    const value = input.value; //obtenemos el valor 

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado"); //Permite obtener ese elemento HTML en JS
    const value = input.value; //obtenemos el valor 

    const area = areaCuadrado(value);
    alert(area);
}
// Triangulo
function calcularPerimetroTriangulo(){
    //lado1
    const input = document.getElementById("inputLado1Triangulo");
    const value1 = input.value;
    //lado2
    const input2 = document.getElementById("inputLado2Triangulo");
    const value2 = input2.value;
    //base
    const input3 = document.getElementById("inputBaseTriangulo");
    const base = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, base);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    //base
    const input = document.getElementById("inputBaseTriangulo");
    const base = input.value;
    //altura
    const input1 = document.getElementById("inputAlturaTriangulo");
    const altura = input1.value;

    const area = areaTriangulo(altura, base);
    alert(area);
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}