function createChristmasTree(ornaments, height) {
    const res = [];
    const ornament = [...ornaments];

    const nextOrnament = () => {
        const next = ornament.shift();
        ornament.push(next);
        return next;
    };

    for (let i = 0; i < height; i++) {
        let line = '';

        for (let j = 0; j < i + 1; j++) {
            line += `${nextOrnament()} `;
        }

        res.push(`${' '.repeat(height - i - 1)}${line.trimEnd()}`);
    }

    res.push(`${' '.repeat(height - 1)}|`);
    return res.join('\n') + '\n';
}