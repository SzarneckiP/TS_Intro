"use strict";
{
    let xx;
    xx = 'Przemsyław';
    xx = 3;
    xx = {};
    xx = () => { };
    if (typeof xx === 'number') {
        let xage = xx;
    }
    if (typeof xx === 'object' && xx !== null) {
        if (xx.age !== undefined) {
            xx.age;
        }
    }
    if (typeof xx === 'function') {
        xx();
    }
}
