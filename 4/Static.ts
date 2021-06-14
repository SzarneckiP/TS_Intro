{
    class Person {

        public static info = 'Text';
        public firstName: string;
        public email: Email;

        constructor(name: string, email: Email) {
            this.firstName = name;
            this.email = email;
        }

        public toString = () => {
            return `${this.firstName} ${this.email.toString()}`;
        }

        public static getStaticInfo() {
            return `${Person.info}`;
        }
    }

    const person = new Person('a', new Email('a', 'b'));

    Person.info;
}