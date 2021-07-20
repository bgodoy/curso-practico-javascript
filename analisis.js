// Helpers
function CalcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemnto) {
            return valorAcumulado + nuevoElemnto;
        }
    );

    const PromedioLista = sumaLista / lista.length;
    return PromedioLista;
}


const salariosGT = Guatemala.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosGTSorted = salariosGT.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero % 2 === 0 );
}

function medianaSaliariosGT(lista){
    const mitad = parseInt(lista.length / 2)

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];
        const mediana = CalcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }

}

const medianaGeneralGT = medianaSaliariosGT(salariosGTSorted);

//Mediana del top 10%

const spliceStart = (salariosGTSorted.length * 90) / 100;
const spliceCount = salariosGTSorted.length - spliceStart;

const salariosGTTop10 = salariosGTSorted.splice(
    spliceStart, 
    spliceCount
);


const medianaTop10lGT = medianaSaliariosGT(salariosGTTop10);

console.log({
    medianaGeneralGT,
    medianaTop10lGT,
});