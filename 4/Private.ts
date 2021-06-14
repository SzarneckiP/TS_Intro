{
    class Email {
        private name: string;
        private domain: string;

        constructor(name: string, domain: string) {
            this.name = name;
            this.domain = domain;
        }
        private toString = () => {
            return `${this.name}@${this.domain}`;
        }
    }

    class Person {
        private firstName: string;
        private email: Email;

        constructor(name: string, email: Email) {
            this.firstName = name;
            this.email = email;
        }

        private toString = () => {
            return `${this.firstName} ${this.email.toString()};`
        }
    }
    const email = new Email('przemek', 'kurstypescript.pl ');

    const przemek = new Person('Przemek', email);
    console.log(przemek.toString());
}