"use strict";
{
    class Point2D {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        getX() {
            return this.x;
        }
        getY() {
            return this.y;
        }
        static distanceBetween(point1, point2) {
            let xDiff = point2.getX() - point1.getY();
            let yDiff = point2.getY() - point1.getX();
            let dist = Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
            return Math.ceil(dist);
        }
    }
    const p1 = new Point2D(2, 2);
    const p2 = new Point2D(23, 45);
    console.log(Point2D.distanceBetween(p1, p2));
}
