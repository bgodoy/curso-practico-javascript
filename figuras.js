
// Código del cuadrado 
console.group("Cuadrados");

//const ladoCuadrado = 5; 

function perimetroCuadrado (ladoC) {
    return  ladoC * 4 ;
} 


function areaCuadrado (ladoC) {
    return ladoC * ladoC ;
}

//console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cms. ");
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cms. ");
//console.log("El area del cuadrado es: " + areaCuadrado + "cms cuadrados.");

console.groupEnd();

// Código del triángulo 

console.group("Triangulos");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5 */

function perimetroTriangulo (ladoT1, ladoT2, baseT) {

    return ladoT1 + ladoT2 + baseT;
}

function areaTriangulo (baseT, alturaT) {
    return (baseT * alturaT) / 2;
}


/* console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2+ "cm, " + baseTriangulo + "cm.");
console.log("La altura del triangulo es de:" + alturaTriangulo + "cm.")
console.log("El perimetro del triangulo es de:" + perimetroTriangulo);
console.log("El area del triangulo es de:" + areaTriangulo + "cms. "); */

console.groupEnd();

//Codigo del circulo 
console.group("Circulos");

/* const radioCirculo = 4;
const diametroCirculo = radioCirculo *2;
const PI = 3.1415
const PI2 = Math.PI; */

function diametroCirculo(radioC){
    return radioC * 2; 
}

function perimetroCirculo (radioC) {
    const diametro =  diametroCirculo(radioC);
    return diametro * Math.PI;
}

function areaCirculo (radioC) {
    return (radioC * radioC) * Math.PI;
}

/* 
console.log("El radio del circulo es:" + radioCirculo + "cm.");
console.log("El diametro del circulo es:" + diametroCirculo + "cm.");
console.log("El valor de PI es:" + PI2);
console.log("El perimetro del circulo es:" + perimetroCirculo + "cm. ");
console.log("El area del circulo es: " + areaCirculo + "cm. cuadrados"); */

console.groupEnd();


function CalcPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetroC = perimetroCuadrado(value);
    alert(perimetroC);

}

function CalcAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const areaC = areaCuadrado(value);
    alert(areaC);

}

function CalcPerimetroTriangulo() {

    const inputLado1 = document.getElementById("InputTriangulo1");
    const inputLado2 = document.getElementById("InputTriangulo2");
    const inputBase1 = document.getElementById("InputTriangulo3");
    const inputAltura1  = document.getElementById("InputTriangulo4");

    const vLado1    = inputLado1.value ;
    const vLado2    = inputLado2.value ;
    const vBase1    = inputBase1.value ; 
    const vAltura1  = inputAltura1.value;
    
    const perimetroT = perimetroTriangulo(vLado1, vLado2, vBase1)
    alert(perimetroT);

}

function CalcAreaTriangulo() {
    
    const inputLado1 = document.getElementById("InputTriangulo1");
    const inputLado2 = document.getElementById("InputTriangulo2");
    const inputBase1 = document.getElementById("InputTriangulo3");
    const inputAltura1  = document.getElementById("InputTriangulo4");

    const vLado1    = inputLado1.value ;
    const vLado2    = inputLado2.value ;
    const vBase1    = inputBase1.value ; 
    const vAltura1  = inputAltura1.value;
    
    const areaT = areaTriangulo(vBase1, vAltura1);
    alert(areaT);

}
