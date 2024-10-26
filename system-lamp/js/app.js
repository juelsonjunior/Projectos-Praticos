const btn_OnOff = document.querySelector('#lampOnOff')
const light_lamp = document.querySelector('.light_lamp')
const lamp = document.querySelector('#lampada')

function isLampBreak(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isLampBreak()){
        lamp.src = "./img/ligada.png"
        light_lamp.classList.toggle('on')
    }
}

function lampOff(){
    if(!isLampBreak()){
        lamp.src = "./img/desligada.png"
        light_lamp.classList.remove('on')
    }
}

function quebrarLamp(){
    lamp.src = "./img/quebrada.png"
    light_lamp.classList.toggle('on')
}


btn_OnOff.addEventListener('click', () => {
    if(btn_OnOff.textContent == "Ligar"){
        lampOn()
        btn_OnOff.textContent = "Desligar"
    }else{
        lampOff()
        btn_OnOff.textContent = "Ligar"
    }
})
lamp.addEventListener('click', quebrarLamp)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseout', lampOff)

