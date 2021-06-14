{

    let logical: boolean = true;
    let age: number = 3;
    let name: string = 'Przemek';

    if (typeof age === 'number') {
        console.log('Age is number');
    }

    let something: any;

    if (typeof something === 'string') {
        something.length;
    } else if (typeof something === 'number') {
        something.valueOf;
    } else if (typeof something === 'function') {
        something();
    }

}