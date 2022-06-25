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
    constructor() {
        this.hull = randomizer(3, 6)
        this.firePower = randomizer(2, 4)
        this.accuracy = randomizer(.6, .8)
        this.yourTurn = false //I'm think of using this as some sort of way to track who's turn it is. Maybe at the end of the attack function !(yourTurn)
        attack(alien){
            if (Math.random < Ship.accuracy) {
                alien.hull -=
        }

            if (Math.random() < alien.accuracy) {
                this.hull -= alien.firePower
            }
        }
    }
}
const userShip = {
    hull: 20,
    firePower: 5,
    accuracy: .7
    //I want some sort of special move method
}
let example = new Ship;
console.log(example.accuracy)
let billy = randomizer(7, 9)