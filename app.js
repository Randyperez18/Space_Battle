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
    constructor(hull, firePower, accuracy, name) {
        this._hull = hull
        this._firePower = firePower
        this._accuracy = accuracy
        this._name = name
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
    checkStatus() {
        if (this.hull <= 0) {
            return this.alive = false
        }
    }
}
//samus/metroids
const samus = new Ship(20, 5, .7, 'Samus')
const metroidNames = ['Krohann', 'Krisael', 'Krian', 'Krosue', 'Kruan', 'Kruis']
let metroidGang = []
const spawnShips = () => {
    metroidGang.push(new Ship(Math.floor(randomizer(3, 6)), Math.floor(randomizer(2, 4)), randomizer(.6, .8), metroidNames[Math.floor(randomizer(0, 6))]))
}
for (metroid of metroidNames) {
    spawnShips(metroid)
}
let metroidAttacker = metroidGang.pop()
console.log(metroidGang);
console.log(metroidAttacker)

//selector variables
let logValue = 'Ready Samus?' //Printed messages
let samusStats = document.querySelector('.playerStats')
let metroidStats = document.querySelector('.enemyStats')
let metroidHeader = document.querySelector('#metroidNameBox')
let logP = document.querySelector('#logp')
let popup = document.querySelector('#popup')
//getter functions
const getSamusStats = () => samusStats.innerHTML = `Hull: ${samus.hull}\n Cannon power: ${samus.firePower}\n Accuracy: ${Math.round(samus.accuracy * 100)}%`

const getMetroidStats = () => metroidStats.innerHTML = `Hull: ${metroidAttacker.hull} \n Cannon Power: ${metroidAttacker.firePower}\n Accuracy: ${Math.round((metroidAttacker.accuracy * 100))}%`

const getLogP = () => logP.innerHTML = logValue

const metroidNombre = () => metroidHeader.innerHTML = metroidAttacker.name;

const openPopup = () => {
    popup.classList.add("open-popup")
}
const closePopup = () => {
    popup.classList.remove("open-popup")
}

getLogP();
getSamusStats();
getMetroidStats();
metroidNombre();
//Samus Attack
const powerBeam = () => {
    if (samus.accuracy >= Math.random()) {
        metroidAttacker.hull -= samus.firePower
        //get metroid attacker hull to change html
        logValue = `Samus did ${samus.firePower} damage!`
        getLogP();
    } else {
        logValue = 'Target dodged your power beam!'
        getLogP();
    }
}
//Samus Attack
let metroidBite = () => {
    if (metroidAttacker.hull >= Math.random()) {
        samus.hull -= metroidAttacker.firePower
        //get metroid attacker hull to change html
        logValue = `Samus took ${metroidAttacker.firePower} damage`
    } else {
        logValue = `Samus dodged Metroid ${metroidAttacker.name}'s attack`
    }
}

const gameStart = () => {
    if (metroidAttacker.alive) {
        if (samus.alive === false) {
            //insert death function
        }
        powerBeam();
        metroidAttacker.checkStatus();
        metroidBite();
        samus.checkStatus();
    } else {
        if (metroidGang.length > 0) {
            metroidAttacker = metroidGang.pop()
        } else {
            //you win func
        }
        openPopup();
    }
    // I need to have it ask you if you want to keep playing and then have it attack a new alien

}

