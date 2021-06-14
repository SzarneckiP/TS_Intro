"use strict";
{
    class Email {
        constructor(name, domain) {
            this.toString = () => {
                return `${this.name}@${this.domain}`;
            };
            this.name = name;
            this.domain = domain;
        }
    }
    class Person {
        constructor(name, email) {
            this.toString = () => {
                return `${this.firstName} ${this.email.toString()};`;
            };
            this.firstName = name;
            this.email = email;
            this.preferences = [];
        }
        getEmail() {
            console.log('Email field was read');
            return this.email;
        }
        getPreferences() {
            return Object.assign([], this.preferences); // zrobienie kopi tablicy aby ktoś nie mógł modyfikować orykinalnej tablicy
        }
        addPreferences(pref) {
            this.preferences.push(pref);
            return this.preferences;
        }
    }
    const email = new Email('przemek', 'kurstypescript.pl ');
    const przemek = new Person('Przemek', email);
    console.log(przemek.getEmail());
}
