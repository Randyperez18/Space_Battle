/*
User attacks first

Alien attacks

User attack etc, until one is destroyed

if user destroys alien ship have the option to attack or retreat
haven't decided what to do if we retreat but probably something like being able to buy upgrades. Sounds difficult to implent but fun.

User wins if all 6 ships are destroyed.

User loses if their ship is destroyed.

I think step one is making the Ship class and each individual ship

*/
const randomizer = (min, max) => Math.random() * (max - min) + min;
class Ship {
    constructor(hull, firePower, accuracy, user) {
        this.hull = hull
        this.firePower = firePower
        this.accuracy = accuracy
        this.user = user //I'm think of using this as some sort of way to track who's turn it is. Maybe at the end of the attack function !(yourTurn)

    }
    get hull() {
        return this._hull
    }
    set hull(num) {
        if (typeof num === 'number') {
            this._hull = num
            return this._hull
        } else {
            return "I messed up bad"
        }
    }
    get firePower() {
        return this._firePower
    }
    set firePower(num) {
        if (typeof num === 'number') {
            this._firePower = num
            return this._firePower
        } else {
            return "I messed up bad"
        }
    }
    get accuracy() {
        return this._accuracy
    }
    set accuracy(num) {
        if (typeof num === 'number') {
            this._accuracy = num
            return this._accuracy
        } else {
            return "I messed up bad"
        }
    }
    userAttack(enemy) {
        enemy.hull -= this.firePower
        turn = false
        console.log(enemy.hull) //maybe create a function that checks if either ship was destroyed and if so do stuff. Run at the end of every turn.
    }
}

const userShip = new Ship(20, 5, .7, true)
console.log(youShip.accuracy)
const alienShip = new Ship(randomizer(3, 6), randomizer(2, 4), randomizer(.6, .8), false)
console.log(alienShip)