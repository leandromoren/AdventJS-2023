function organizeGift(gifts) {
    let ultimoIndice = 0;

    return gifts
        .match(/[a-z]/gi)
        .map(letra => {
            const x = gifts.slice(ultimoIndice, gifts.indexOf(letter));
            ultimoIndice = gifts.indexOf(letra) + 1;

            const palets = Math.floor(x / 50);
            const caja = Math.floor((x - palets * 50))
            const bolsa = Math.floor(x - (palets * 50 + box * 10));

            return (
                (palets > 0 ? `[${letra}]`.repeat(palets) : '') +
                (caja > 0 ? `{${letra}}`.repeat(caja) : '') + 
                (bolsa > 0 ? `(${letra.repeat(bolsa)})` : '')
            )
        }).join('');
}