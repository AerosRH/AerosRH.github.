//Codigo del cuadrado
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}

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

//Triangulo Isosceles
function alturaIsosceles(lado1, lado2, base){
    if (lado1 === lado2 && lado1 != base){
        return (Math.sqrt((lado1*lado1)- (base * base / 4)));
    }else{
        const mensaje = document.getElementById("resulTrianguloIsosceles")
        mensaje.innerText = "Los datos proporcionados no corresponden a un triangulo isosceles";
    }
}

//Empezando con HTML///////////////////////////////////////
//Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado"); //Permite obtener ese elemento HTML en JS
    const value = input.value; //obtenemos el valor 

    const perimetro = perimetroCuadrado(value);
    const result = document.getElementById("resultCuadrado")
    result.innerText = "El perimetro es: " + perimetro;
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado"); //Permite obtener ese elemento HTML en JS
    const value = input.value; //obtenemos el valor 
    const area = areaCuadrado(value);
    const result = document.getElementById("resultCuadrado")
    result.innerText = "El area es: " + area;
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
    const result = document.getElementById("resultTriangulo")
    result.innerText = "El perimetro es: " + perimetro;
}

function calcularAreaTriangulo(){
    //base
    const input = document.getElementById("inputBaseTriangulo");
    const base = input.value;
    //altura
    const input1 = document.getElementById("inputAlturaTriangulo");
    const altura = input1.value;

    const area = areaTriangulo(altura, base);
    const result = document.getElementById("resultTriangulo")
    result.innerText = "El area es: " + area;
}

//Circulo
function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    const perimetroMenosDecimales = perimetro.toFixed(4);
    const result = document.getElementById("resultCirculo")
    result.innerText = "El perimetro es: " + perimetroMenosDecimales;
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    const areaMenosDecimales = area.toFixed(4);
    const result = document.getElementById("resultCirculo")
    result.innerText = "El area es: " + areaMenosDecimales;
}

//Isosceles
function calcularAlturaIsosceles(){
    const input = document.getElementById("inputLado1Isosceles");
    const value = input.value;
    const input1 = document.getElementById("inputLado2Isosceles");
    const value1 = input1.value;
    const input2 = document.getElementById("inputBaseIsosceles");
    const base = input2.value;

    const altura = alturaIsosceles(value, value1, base);
    const result = document.getElementById("resulTrianguloIsosceles")
    if (altura == undefined){
        result.innerText = "Los datos proporcionados no son de un triangulo isosceles"
    }else{
        result.innerText = "La altura es es: " + altura;
    }
}
