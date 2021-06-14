import { NumericLiteral } from "typescript";

{

    const sum = (a: any, b: any): number => {

        if (typeof a === 'number' && typeof b === 'number') {
            return a + b;
        } else {
            throw new Error('niepoprawne parametry');
        }
    }
    console.log(`${sum(5, 5)}`);
    sum('a', 'b');

}