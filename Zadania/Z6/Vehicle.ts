import Unit from './Unit';
import Weapon from './Weapon';

class Vehicle extends Unit {

    constructor(name: string, hitPoints: number, moveDistance: number, weapons: Weapon[],
        private fuelLeft: number,    //przykład skróconego konstruktora
        private maxFuel: number,
        private fuelConsumptionPerMove: number
    ) {
        super(name, hitPoints, moveDistance, weapons);
    }
}