{


    let name: string;
    let age: number;

    let someVar: string | number;


    let dice: 1 | 2 | 3 | 4 | 5 | 6;

    dice = 5;

    //dice = 7; //będzie bład ponieważ 7 nie zanjduje się w zdefiniowanym wcześniej zmiennej;

    let names: 'Przemek' | 'Paweł' | 'Rysiek';

    names = 'Przemek';

    //names = 'zenek' // to samo co z dice;

    let miszmasz: 'x' | true | 1 | 2 | 3 | number[];
    miszmasz = 'x'
    miszmasz = 2;


    const youWillNotBeAbleToChangeMe = 'dom';

    let flagIsSet: boolean = true;
    let anotherFlag: true | false = false;

    flagIsSet = anotherFlag;
    anotherFlag = flagIsSet;
}