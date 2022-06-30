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
        this.alive = true
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
const samus = new Ship(20, 4, .7, 'Samus')
const metroidNames = ['Krohann', 'Krisael', 'Krian', 'Krose', 'Kruan', 'Kruis']
let metroidGang = []
const spawnShips = () => {
    metroidGang.push(new Ship(Math.floor(randomizer(3, 6)), Math.floor(randomizer(2, 4)), randomizer(.6, .8), metroidNames[Math.floor(randomizer(0, 6))]))
}
for (metroid of metroidNames) {
    spawnShips(metroid)
}
let metroidAttacker = metroidGang.pop()

//selector variables
let logValue = 'Prepare yourself Samus. Several Metroids incoming.' //Printed messages
let samusStats = document.querySelector('.playerStats')
let metroidStats = document.querySelector('.enemyStats')
let metroidHeader = document.querySelector('#metroidNameBox')
let logP = document.querySelector('#logp')
let popup = document.querySelector('#popup')
let play = document.querySelector('#play')
let contBtn = document.querySelector('#cont')
let retreatBtn = document.querySelector('#retreat')
let popLose = document.querySelector('.popupLose')
let popWin = document.querySelector('#win')
// play.addEventListener('click', popup())
//getter functions
const getSamusStats = () => samusStats.innerHTML = `Hull: ${samus.hull}\n Cannon power: ${samus.firePower}\n Accuracy: ${Math.round(samus.accuracy * 100)}%`

const getMetroidStats = () => metroidStats.innerHTML = `Health: ${metroidAttacker.hull} \n Strength: ${metroidAttacker.firePower}\n Accuracy: ${Math.round((metroidAttacker.accuracy * 100))}%`

const getLogP = () => logP.textContent = logValue

const metroidNombre = () => metroidHeader.innerHTML = metroidAttacker.name;

const openWin = () => popWin.classList.add('open-popup')

const openPopup = () => {
    popup.classList.add("open-popup")

}
const openLose = () => {
    popLose.classList.add('open-popup')
}
const closePopup = () => {
    popup.classList.remove("open-popup")
}
const lose = () => {
    logValue = `Game Over`
    console.log(`Game Over`)
    getLogP();
    openLose();
}
const invis = () => play.classList.add('invis')

getLogP();
getSamusStats();
getMetroidStats();
metroidNombre();

//Samus Attack
const powerBeam = () => {
    if (samus.accuracy >= Math.random()) {
        metroidAttacker.hull -= samus.firePower
        //get metroid attacker hull to change html
        console.log(`Samus' power beam did ${samus.firePower} damage! \n ${metroidAttacker.name} has ${metroidAttacker.hull} health left. `)
        logValue = `Samus' power beam did ${samus.firePower} damage! \n ${metroidAttacker.name} has ${metroidAttacker.hull} health left. `
        getLogP();
    } else {
        logValue = `${metroidAttacker.name} dodged your power beam!`
        console.log(`${metroidAttacker.name} dodged your power beam!`)
        setTimeout(getLogP, 500)
    }
}
//Samus Attack
let metroidBite = () => {
    if (metroidAttacker.accuracy >= Math.random()) {
        samus.hull -= metroidAttacker.firePower
        //get metroid attacker hull to change html
        logValue = `Samus took ${metroidAttacker.firePower} damage`
        console.log(`Samus took ${metroidAttacker.firePower} damage`)
        getLogP();
    } else {
        logValue = `Samus dodged Metroid ${metroidAttacker.name}'s attack`
        console.log(`Samus dodged Metroid ${metroidAttacker.name}'s attack`)
        getLogP();
    }
}
const combat = () => {
    while (samus.alive === true & metroidAttacker.alive === true) {
        metroidNombre()
        powerBeam()
        getMetroidStats()
        metroidAttacker.checkStatus()
        if (metroidAttacker.alive === false) {
            if (metroidGang.length <= 0) {
                logValue = 'YOU WIN!'
                console.log('YOU WIN')
                getLogP();
                openWin()
                return
            }
            metroidAttacker = metroidGang.pop()
            console.log(metroidGang.length)
            setTimeout(openPopup, 1300);
            logValue = 'Another Metroid approaches. Continue the battle?'
            setTimeout(getLogP, 1000);
            return
        }
        setTimeout(metroidBite, 500)
        getSamusStats()
        samus.checkStatus()
        if (samus.alive === false) {
            lose();
        }
        console.log(samus.hull, metroidAttacker.hull)
    }
}
// contBtn.addEventListener('click', combat())

// let continue = () => {
// }
const gameStart = () => {
    if (metroidAttacker.alive === true) {
        if (samus.alive === false) {
            lose();
            //insert death function
            //I was considering having another popup that has the samsus exploding 
            // gif and has a button to restart.
        }
        combat();
        // powerBeam();
        // getMetroidStats();
        // metroidAttacker.checkStatus();
        // setTimeout(metroidAttacker.checkStatus, 5)
        // setTimeout(metroidBite, 1000);
        // getSamusStats();
        // samus.checkStatus();
        // console.log(samus.hull, metroidAttacker.hull)
    }

    if (metroidGang.length > 0) {
        // setTimeout(openPopup, 1000);
        metroidAttacker = metroidGang.pop()
    } else {
        logValue = 'You win!'
        //you win func
        //I think I want ANOTHER popup with the samus with the scarf gif
    }



    // I need to have it ask you if you want to keep playing and then have it attack a new alien

    getMetroidStats();
    metroidNombre();
}
// powerBeam();
// gameStart();
