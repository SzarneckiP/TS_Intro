"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    const sum = (a, b) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        }
        else {
            throw new Error('niepoprawne parametry');
        }
    };
    console.log(`${sum(5, 5)}`);
    sum('a', 'b');
}
