function maxDistance(movements) {
    // Code here
    // Copia el array de movimientos para evitar modificar el original
    const moves = [...movements]; 

    // Cuenta el número de movimientos hacia la derecha ('>')
    const right = moves.filter(m => m === '>').length; 
    // Cuenta el número de movimientos hacia la izquierda ('<')
    const left = moves.filter(m => m === '<').length;
    // Calcula el número de movimientos que no son ni hacia la derecha ni hacia la izquierda
    const star = moves.length - (right + left); 

     // Devuelve la distancia máxima posible
    return Math.abs(right - left) + star;
}