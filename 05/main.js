function cyberReindeer(road, time) {
    // Code here
    // Array para almacenar el estado de la carretera en cada paso de tiempo
    const arrayRoad = [road]
    // Posición actual del trineo de Santa en la carretera
    let santaPos = road.indexOf('S')
  
    for (let i = 1; i < time; i++) {
      // Copia la última configuración de la carretera
      const newWay = [...arrayRoad.at(-1)]
  
      // Si se cumplen estas condiciones, se actualiza la configuración de la carretera
      if (i >= 5 || road[santaPos + 1] === '.') {
        // Si es el primer movimiento, la posición anterior se marca como vacía
        newWay[santaPos] = i === 1 ? '.' : road[santaPos]
        // Se mueve el trineo a la siguiente posición
        santaPos++
        // Se marca la nueva posición del trineo como ocupada por 'S'
        newWay[santaPos] = 'S'
      }
  
       // Genera la representación actual de la carretera en este paso de tiempo
      const step = i < 5 ? newWay.join('') : newWay.join('').replaceAll('|', '*')
      // Agrega el estado actual de la carretera al array
      arrayRoad.push(step)
    }
  
     // Devuelve el array con el estado de la carretera en cada paso de tiempo
    return arrayRoad
}
