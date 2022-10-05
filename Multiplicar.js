const multiplicar = (a, b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (i = 0; i < Math.abs(b); i++){
        resultado = positivo ? resultado + a : resultado - a
    }
    return resultado
}
const a = multiplicar(98, 42)
console.log("Multiplicación hecha sin usar el signo de multiplicación: ", a)