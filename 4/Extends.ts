{
    class Rectangle {

        private a: number;
        private b: number;

        constructor(a: number, b: number) {
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

        public toString = (): string => {
            return 'Kwadrat: ';
        }
    }

    let kwadrat: Square = new Square(10);
    console.log(kwadrat.toString(), kwadrat.area());

    let prostokąt: Rectangle = new Rectangle(10, 5);
    console.log('prostokąt: ', prostokąt.area());
}