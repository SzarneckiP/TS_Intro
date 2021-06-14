"use strict";
{
    class Person {
        constructor(name, email) {
            this.toString = () => {
                return `${this.firstName} ${this.email.toString()}`;
            };
            this.firstName = name;
            this.email = email;
        }
        static getStaticInfo() {
            return `${Person.info}`;
        }
    }
    Person.info = 'Text';
    const person = new Person('a', new Email('a', 'b'));
    Person.info;
}
