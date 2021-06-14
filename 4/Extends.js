"use strict";
{
    class Rectangle {
        constructor(a, b) {
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
            this.toString = () => {
                return 'Kwadrat: ';
            };
        }
    }
    let kwadrat = new Square(10);
    console.log(kwadrat.toString(), kwadrat.area());
    let prostokąt = new Rectangle(10, 5);
    console.log('prostokąt: ', prostokąt.area());
}
