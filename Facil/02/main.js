function manufacture(gifts, materials) {
    // Code here
  const regalosFabricados = [];
  
    for (const regalo of gifts) {
      const materialesRequeridos = Array.from(new Set(regalo));
  
      if (materialesRequeridos.every(caracter => materials.includes(caracter))) {
        regalosFabricados.push(regalo);
      }
    }
  
    return regalosFabricados;
  }