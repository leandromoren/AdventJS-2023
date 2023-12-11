function adjustLights(lights) {
    let serial = ['🟢', '🔴']
    const luzVerde = lights.filter(
        (luz, i) => luz !== serial[+(i % 2)]
    ).length;

    serial.reverse()
    const luzRoja = lights.filter(
        (luz, i) => luz !== serial[+(i % 2)]
    ).length

    return [luzVerde, luzRoja].sort()[0];
}