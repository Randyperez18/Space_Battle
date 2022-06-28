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
    constructor(hull, firePower, accuracy, user, name) {
        this._hull = hull
        this._name = name
        this._firePower = firePower
        this._accuracy = accuracy
        this._user = user
        this._turn = user
        //I'm think of using this as some sort of way to track who's turn it is. Maybe at the end of the attack function !(yourTurn)

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
    get name() {
        return this._name
    }
    set name(name) {
        if (typeof name === 'string') {
            this._name = name
            return this._name
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
    attack(enemy) {
        enemy.hull -= this.firePower
        this.turn = false // I don't think I need this
        enemy.turn = true
        //maybe create a function that checks if either ship was destroyed and if so do stuff. Run at the end of every turn.
        let p = document.querySelector('#logp')
        let logValue = `${enemy.name} has taken ${this.firePower} damage! ${enemy.name} destroyed !`
        if (enemy.hull > 0) {

            logValue = `${enemy.name} has taken ${this.firePower} damage! ${enemy.name} can only take ${enemy.hull} more damage! `
            enemy.Attack(this)
        }
        p.innerHTML = logValue
        if (enemy.hull < 0) {
            return
        }

    } //spawn(variable) {
    //     let variable = new Ship(randomizer(3, 6), randomizer(2, 4), randomizer(.6, .8), false, 'Kroognaught')
    // }
}
const fact = (...args) => new Ship(...args)

let billy = fact(randomizer(3, 6), randomizer(2, 4), randomizer(.6, .8), false, 'Kroog')
console.log(billy)
let krogs = ['Kroogger', 'Kroogy', 'Kroogus', 'Kroogalina', 'Kroogabell', 'Kruis', 'Krohamed', 'Krian', 'Kreep', 'Krisael', 'Krohann', 'Krosue']
// const getRandomItem = (arr) => {
//     const randomIndex = Math.floor(Math.random() * arr.length)
//     const item = arr[randomIndex]
//     return item
// }
// Ship.spawn(krogs[Math.floor(Math.random() * krogs.length - 1)])
//Just the user and alien ships for now.
const userShip = new Ship(20, 5, .7, true, 'You')
const krohann = new Ship(Math.floor(randomizer(3, 6)), randomizer(2, 4), randomizer(.6, .8), false, 'Krohann')//I kinda want to make the health and fire power math.floored I don't want them to have 5.0000001 health and you not one shot them because of it. It feels dumb.
const krisael = new Ship(Math.floor(randomizer(3, 6)), randomizer(2, 4), randomizer(.6, .8), false, 'Krisael')
const krian = new Ship(Math.floor(randomizer(3, 6)), randomizer(2, 4), randomizer(.6, .8), false, 'Krian')
const krosue = new Ship(randomizer(3, 6), randomizer(2, 4), randomizer(.6, .8), false, 'Krosue')

// document.querySelector('#hull').textContent = 7
// let fireP = document.querySelector('#firePower')
// let accuracy = document.querySelector('#accuracy')
// let log = document.querySelector('#log')


const gameStart = () => {
    userShip.attack(krohann)
}


// const play = document.querySelector('#play')
// play.addEventListener('click', gameStart())
