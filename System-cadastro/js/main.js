import { usuario } from './usuario.js'


const form = document.querySelector('#form-cad-user')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    verificarForm()
})

function verificarForm() {
    const box_input = document.querySelectorAll('.box-input')
    const input_form = document.querySelectorAll('.input-form')
    const input_nome = document.querySelector('#nome')
    const input_email = document.querySelector('#email')
    const input_profissao = document.querySelector('#profissao')
    const box_msg = document.querySelector('.box-msg')
    const msgSucess = document.querySelector('.box-msg .msg-alert')

    const nome = input_nome.value
    const email = input_email.value
    const profissao = input_profissao.value

    const novoUsuario = new usuario(nome, email, profissao)

    novoUsuario.validarInputs()

    const formInput = document.querySelectorAll('.input-error')

    const isValidForm = [...formInput].every((item) => {
        item.className === 'input-error'
    })

    if (isValidForm) {
        novoUsuario.saveInObject(nome, email, profissao)

        box_msg.classList.add('show-Msg')
        msgSucess.innerHTML = "Cadastro feito com sucesso"

        setTimeout(() => {
            box_msg.classList.remove('show-Msg')

            box_input.forEach((box) => {
                box.classList.remove('input-success')
            })
            form.reset()

        }, 1000)
    } else {
        box_msg.textContent = "Falha no cadastro do usuario"
    }
}


//---------Invocando animação dos cards----------//

let link_hide_box = document.querySelectorAll('.link-hide-box')

link_hide_box.forEach((link) => {
    link.addEventListener('click', () => {
        ocultarBox()
    })
})

function ocultarBox() {
    const box_form = document.querySelector('.box-form')
    const box_list_user = document.querySelector('.box-list-user')

    if (!box_form.classList.contains('boxHidden')) {
        box_form.classList.add('boxHidden')
        box_list_user.classList.toggle('boxHidden')
    } else {
        box_form.classList.remove('boxHidden')
        box_list_user.classList.add('boxHidden')
    }
}


