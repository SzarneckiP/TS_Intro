"use strict";
{
    let przemek = {
        name: 'Przemek',
        age: 28,
    };
    przemek = {
        name: 'przemek',
        age: 21,
        email: 'email@example.com',
    };
    let izydor = {
        name: 'izydor',
        age: 23,
    };
    const sendEmail = (people) => {
        people.filter(person => person.email).forEach(person => {
            console.log(`Send email to ${person.email}...`);
        });
        return people;
    };
}
