function drawGift(size, symbol) {
    //Creacion del array "top" mediante el metodo map
    const top = Array(size).fill().map((_, i) => {
        // Creación de la cara del regalo: si es la primera o última fila, se llena con "#" del tamaño "size",
        // de lo contrario, se llena con "#" en los extremos y "symbol" repetido (size - 2) veces en el centro
        const face = i === 0 || i === size - 1 ? '#'.repeat(size) : `#${symbol.repeat(size - 2)}`;
        // Creación de los lados del regalo: si no es la primera fila, se llena con "symbol" repetido (i - 1) veces
        // seguido de "#" repetido una vez
        const side = i > 0 ? `${symbol}`.repeat(i - 1) + '#'.repeat(1) : '';
        /*
        Se concatena la cara y el lado, luego se ajusta el ancho del string para que tenga una longitud total de (size * 2 - 1) 
        */
        let calculoSize = size * 2 - 1;
        let calculo = (face + side).padStart(calculoSize)
        return calculo;

    });
    // Se crea el array "bottom" tomando una porción de "top" que excluye la última fila,
    // luego se invierte el orden de las filas y se elimina el espacio en blanco a la izquierda de cada fila
    const bottom = top.slice(0, size - 1).reverse().map(x => x.trimStart());
    return [top, bottom].flat().join('\n') + '\n';
}

console.log(drawGift(10, '$'))