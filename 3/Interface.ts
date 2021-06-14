{
    interface Person {
        name: string,
        age: number,
        email?: string,
        toString: () => string,
    }

    let przemek: Person = {
        name: 'Przemek',
        age: 28,
    }

    przemek = {
        name: 'przemek',
        age: 21,
        email: 'email@example.com',
    }

    let izydor: Person = {
        name: 'izydor',
        age: 23,
    }

    const sendEmail = (people: Person[]): Person[] => {
        people.filter(person => person.email).forEach(person => {
            console.log(`Send email to ${person.email}...`);
        })
        return people;
    }
}