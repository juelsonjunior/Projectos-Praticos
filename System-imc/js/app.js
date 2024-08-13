function cacularIMC(peso, altura){
    let imc;
    imc = peso / (altura ^ 2)
    return imc.toFixed(2)
}
function verificarPeso(imc){
    let resultado;

    if(imc < 17){
        resultado = "Muito abaixo do peso"

    }else if(imc >= 17 && imc < 18.5){
        resultado = "Abaixo do peso"

    }else if(imc >= 18.5 && imc < 25){
        resultado = "Peso ideal"

    }else if(imc >= 25 && imc < 30){
        resultado = "Sobrepeso"

    }else if(imc >= 30 && imc < 35){
        resultado = "Obesidade"

    }else if(imc >= 35 && imc < 40){
        resultado = "Obesidade severa"

    }else if(imc > 40){
        resultado = "Obesidade Morbida"
    }else{
        resultado = "Você esta muito acima do peso"
    }

    return resultado
}

function verificarCampos(peso, altura){
    let mensagem

    if(peso != "" && altura != ""){
        mensagem = "";
    }else{
        mensagem = "Precisa preencher todos os campos";
    }

    return mensagem
}

function mostrarIMC(){
    const input_peso = document.querySelector('#peso')
    const input_altura = document.querySelector('#altura')
    const result_div = document.querySelector('.content-resultado')

    let peso = input_peso.value
    let altura = input_altura.value
    resultado.textContent = ""

    let verificar_campo = verificarCampos(peso, altura)

    if(!verificar_campo){
        let imc = cacularIMC(peso, altura)
        let verificar_imc = verificarPeso(imc)
        
        let p = document.createElement('p')
        p.innerHTML = `Peso: ${peso}  Altura: ${altura}<br><br> O seu IMC é: ${imc} <br> <br> Estado de IMC: "${verificar_imc}"`

        result_div.style.display = "block"

        resultado.appendChild(p)
        input_peso.value = ""
        input_altura.value = ""
    }else{
        alert(verificar_campo)
    }

}

const btn_imc = document.querySelector('#calcular-imc')
btn_imc.addEventListener('click', mostrarIMC)