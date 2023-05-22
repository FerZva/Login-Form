function fibonnaci(numero) {
    let serie = [0, 1];
    for(let i = 2; i <= numero; i++) {
        serie.push(serie[i -1] + serie[i - 2]);
    }

    return [serie, serie[numero]];
}

console.log("Serie Completa", fibonnaci(15)[0]);
console.log("Resultado fib", fibonnaci(15)[1]);  