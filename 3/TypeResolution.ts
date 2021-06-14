{
    interface Person {
        age: number,
        name: string,
        email?: string,
    }

    interface Pet {
        age: number,
        name: string,
        breed?: string,
    }

    let przemek: Person = {
        name: 'przemek',
        age: 21,
        email: 'string@example'
    }

    let neko: Pet = {
        name: 'neko',
        age: 3,
        breed: 'animal'
    }

    przemek = neko;
}