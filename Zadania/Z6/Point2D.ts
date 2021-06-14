{
    class Point2D {

        private x: number;
        private y: number;

        constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
        }

        public getX(): number {
            return this.x;
        }

        public getY(): number {
            return this.y;
        }

        public static distanceBetween(point1: Point2D, point2: Point2D): number {
            let xDiff = point2.getX() - point1.getY();
            let yDiff = point2.getY() - point1.getX();

            let dist = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
            return Math.ceil(dist);
        }
    }

    const p1: Point2D = new Point2D(2, 2);
    const p2: Point2D = new Point2D(2, 3);

    console.log(Point2D.distanceBetween(p1, p2));

}