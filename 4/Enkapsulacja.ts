{
    class Email {
        private name: string;
        private domain: string;

        constructor(name: string, domain: string) {
            this.name = name;
            this.domain = domain;
        }
        public toString = () => {
            return `${this.name}@${this.domain}`;
        }
    }

    class Person {
        private firstName: string;
        private email: Email;
        private preferences: string[];

        constructor(name: string, email: Email) {
            this.firstName = name;
            this.email = email;
            this.preferences = [];
        }

        public toString = () => {
            return `${this.firstName} ${this.email.toString()};`
        }

        public getEmail(): Email {
            console.log('Email field was read');
            return this.email;
        }

        public getPreferences(): string[] {
            return Object.assign([], this.preferences); // zrobienie kopi tablicy aby ktoś nie mógł modyfikować orykinalnej tablicy
        }

        public addPreferences(pref: string): string[] {
            this.preferences.push(pref);
            return this.preferences;
        }
    }
    const email = new Email('przemek', 'kurstypescript.pl ');

    const przemek = new Person('Przemek', email);
    console.log(przemek.getEmail());
}