const lista1 = [
    100,
    200,
    500,
    400000000
];

const mitadLista1 = parseInt(lista1.length / 2) ;

function esPar(numero) {

    if (numero % 2 === 0){
        return true;
    } else {
        return false;
    }

}

function CalcularMediaAritmetica(lista){

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemnto) {
            return valorAcumulado + nuevoElemnto;
        }
    );

    const PromedioLista = sumaLista / lista.length;
    return PromedioLista;
}

let mediana; 

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1]; 
    const elemento2 = lista1[mitadLista1-1];
    const promedioElemento1y2 = CalcularMediaAritmetica([
        elemento1, elemento2
    ])

    mediana = promedioElemento1y2

} else {
    mediana = lista1[mitadLista1];
}