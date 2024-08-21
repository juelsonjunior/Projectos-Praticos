const input_caract = document.getElementById("input-caract")
const tbody = document.querySelector("tbody")
let passGenerate = []

const generatePass = (size) => {
    const caractPass = "ABCDEFGHIionJKLMNOPQRSsonTUVWXYZzinabcdefFonghijklmnNonopqrRopstuvwxyz123456789@#$%&"
    const p = document.querySelector(".new-password")
    let newPass = ""

    for (let i = 0; i <= size; i++) {
        const indexCaract = Math.floor(Math.random() * caractPass.length)
        newPass += caractPass.charAt(indexCaract)
    }

    passGenerate.push(newPass)
    p.textContent = newPass
    p.style.color = "#1E1928"
    document.querySelector(".result-password").style.border = "1px solid var(--color-2)"

    updateListPass()
    return p

}

const updateListPass = () => {
    tbody.innerHTML = ``

    if (passGenerate.length == 5) {
        alert("Apos seram geradas 10 senhas a lista será reiniciada")

    }else if(passGenerate.length >= 10){
        alert("Atingiu o limite! A lista de senha foi reiniciada. ")

        passGenerate = []

    }

    passGenerate.forEach((pass, index) => {
        tbody.innerHTML += `
        <tr>
            <td>${index}</td>
            <td>${pass}</td>
        </tr>
        `
    })
}
updateListPass()

const validateinputCaract = () => {
    let value_input = input_caract.value
    if (value_input == "") {
        alert("Precisa informar a quantidade de caractere da senha")

    } else if (value_input < 5 || value_input > 10) {
        alert("O numero de caractere precisa ser no minimo 5 e no maximo 10")

    } else {
        generatePass(value_input)
    }
}

document.getElementById("btn-generator").addEventListener("click", validateinputCaract)

document.querySelectorAll('.colors').forEach(color => {
    color.addEventListener("click", () => {
        let data_cor = color.getAttribute("data-color")
        document.querySelector(":root").style.setProperty("--color-1", data_cor)
    })
})