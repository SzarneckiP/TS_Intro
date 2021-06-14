{
    const dice: 1 | 2 | 3 | 4 = 4;

    interface Person {
        name: string,
        age: number,
        email: string,
    }

    interface Pet {
        name: string,
        age: number,
        breed: string,
    }

    let union: Person | Pet = {
        name: 'Przemek',
        age: 21,
        email: 'example.com',
        //breed: 'human',
    }

    let join: Person & Pet = {
        name: 'a',
        age: 1,
        email: "sadas",
        breed: 'sad',
    }
}