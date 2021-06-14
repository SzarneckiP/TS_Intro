class Weapon {
    private name: string;
    private damage: number;
    private ammoLeft: number;
    private ammoMax: number;
    private rateOfFire: number;
    private range: number;

    constructor(name: string, damage: number, ammo: number, rateOfFire: number, range: number) {
        this.name = name;
        this.damage = damage;
        this.ammoMax = ammo;
        this.ammoLeft = ammo;
        this.rateOfFire = rateOfFire;
        this.range = range;
    }
}

export default Weapon;