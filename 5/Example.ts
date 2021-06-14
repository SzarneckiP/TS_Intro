{
    interface WrapType<X> {
        value: X,
    }

    let age: WrapType<number> = { value: 5 };
    let przemek: WrapType<string> = { value: 'przemek' };

    function wrap<fooBar>(x: fooBar): WrapType<fooBar> {
        return {
            value: x
        }
    }

    //wrap(5);
    //wrap('przemek');

    const x: WrapType<number> = wrap<number>(5);
    wrap<string>('john');


    interface Person {
        name: string,
        age: number,
        email?: string,
    }

    //wrap<Person>({ name: 'john', age: 21 });
    const z: WrapType<Person> = wrap<Person>({ name: 'john', age: 21 });
}