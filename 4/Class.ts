class Email {
    name: string;
    domain: string;

    constructor(name: string, domain: string) {
        this.name = name;
        this.domain = domain;
    }
    toString = () => {
        return `${this.name}@${this.domain}`;
    }
}

class Person {
    firstName: string;
    email: Email;

    constructor(name: string, email: Email) {
        this.firstName = name;
        this.email = email;
    }

    toString = () => {
        return `${this.firstName} ${this.email.toString()};`
    }
}

const przemek = new Person('Przemek', new Email('przemek', 'kurstypescript.pl '));
console.log(przemek.toString());