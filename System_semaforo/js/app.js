const img = document.querySelector('.semaforo')
const button = document.querySelector('.flex-btn')
let indexCor = 0
let intervalId = null
const trafficLight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

const nextColor = () => {
    indexCor = indexCor < 2 ? ++indexCor : 0
}
const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[indexCor]
    turnOn[color]()
    nextColor()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
}
const turnOn = {
    'red':    () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green':  () => img.src = './img/verde.png',
    'automatic': () => intervalId = setInterval(changeColor, 1000)
}
button.addEventListener('click', trafficLight)