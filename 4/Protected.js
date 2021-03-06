"use strict";
{
    class Shape {
    }
    class Rectangle extends Shape {
        constructor(a, b) {
            super();
            this.area = () => {
                return this.a * this.b;
            };
            this.a = a;
            this.b = b;
        }
    }
    class Square extends Rectangle {
        constructor(a) {
            super(a, a);
            this.area = () => {
                return this.a * this.a;
            };
            this.toStr = () => {
                return `Kwadrat o boku: ${this.a || super.area()}`;
            };
        }
    }
    class Circle extends Shape {
        constructor(r) {
            super();
            this.area = () => {
                return this.radius * this.radius * Math.PI;
            };
            this.radius = r;
        }
    }
    const cos = new Circle(2);
    cos.area();
    const something = new Square(10);
    something.area();
    const prostokat = new Square(10);
    prostokat.area();
}
