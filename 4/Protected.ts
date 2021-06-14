{

    abstract class Shape {

        abstract area: () => number;

    }

    class Rectangle extends Shape {

        protected a: number;
        private b: number;

        constructor(a: number, b: number) {
            super();
            this.a = a;
            this.b = b;
        }

        public area = (): number => {
            return this.a * this.b;
        }
    }

    class Square extends Rectangle {

        constructor(a: number) {
            super(a, a);
        }

        public area = (): number => {
            return this.a * this.a;
        }

        public toStr = (): string => {
            return `Kwadrat o boku: ${this.a || super.area()}`;
        }
    }

    class Circle extends Shape {
        radius: number;

        constructor(r: number) {
            super();
            this.radius = r;

        }

        public area = (): number => {
            return this.radius * this.radius * Math.PI;
        }
    }

    const cos: Shape = new Circle(2);
    cos.area();
    const something: Shape = new Square(10);
    something.area();

    const prostokat: Rectangle = new Square(10);
    prostokat.area();
}