{
    type d6 = 1 | 2 | 3 | 4 | 5 | 6;

    type basicType = number | string | boolean;
    type d8 = d6 | 7 | 8;

    let dice: d6 = 2;

    let someArray: basicType[] = [];

    let dice3: d8 = 7;

    type extendBoolean = boolean | 'y' | 'Y' | 'n' | 'N' | 1 | 0;
}