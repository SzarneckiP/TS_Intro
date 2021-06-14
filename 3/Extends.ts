{
    interface Person {
        name: string,
        age: number,
        email?: string,
    }

    interface Child extends Person {
        favoriteColor: string,
    }

    interface Adult extends Person {
        favoriteBeverage: string,
    }

    const izydor: Child = {
        name: 'izydor',
        age: 4,
        favoriteColor: 'blue',
    }

    interface Driver {

    }

    interface CoffeeDrinker extends Person, Adult, Driver {

    }
}