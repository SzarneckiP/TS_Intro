import Unit from './Unit';

interface Vehicle extends Unit {
    fuelLeft: number,
    maxFuel: number,
    fuelConsumptionPerMove: number;
}