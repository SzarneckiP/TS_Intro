{
    let xx: unknown;

    xx = 'Przemsyław';
    xx = 3;
    xx = {};
    xx = () => { };
    if (typeof xx === 'number') {
        let xage: number = xx;
    }

    if (typeof xx === 'object' && xx !== null) {
        if ((xx as { age: number }).age !== undefined) {
            (xx as { age: number }).age;
        }
    }

    if (typeof xx === 'function') {
        xx();
    }
}