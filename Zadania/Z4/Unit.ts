import Weapon from './Weapon';

interface Unit {
    name: string,
    hitPointsLeft: number,
    maxHitPoints: number,
    moveDistance: number,
    weapons: Weapon[],
}

export default Unit;