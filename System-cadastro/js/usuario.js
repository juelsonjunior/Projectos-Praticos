export class usuario {
    constructor(nome, email, profissao) {
        this.nome = nome
        this.email = email
        this.profissao = profissao
    }
    validarInputs(){
        let valido = false
         
        if(this.validarNome()){
            valido = true
        }

        if(this.validarEmail()){
            valido = true
        }

        if(this.validarProfissao()){
            valido = true
        }
        
        return valido

    }
    
    validarNome() {
        let nome_Input = document.querySelector('#nome')
        if (this.nome === '') {
            this.errorInput(nome_Input, 'Preencha o campo nome')
        } else {
            this.sucessInput(nome_Input)
        }
    }

    validarEmail(){
        let email_Input = document.querySelector('#email')
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(this.email === ''){
            this.errorInput(email_Input, 'Preencha o campo email')

        }else if(!regex.test(this.email)){
            this.errorInput(email_Input, 'Digite um email válido')

        }else{
            this.sucessInput(email_Input)
        }
    }

    validarProfissao(){
        let profissao_Input = document.querySelector('#profissao')
        if (this.profissao <= 0) {
            this.errorInput(profissao_Input, 'Selecione uma profissão')
        } else {
            this.sucessInput(profissao_Input)
        }
    }

    saveInObject(nome, email, profissao){

        let dados = {
            nome: `${nome}`, 
            email: `${email}`, 
            profissao: `${profissao}`
        }
        
        console.log(dados)
        
    }

    errorInput(input, mensagem) {
        const box_form = input.parentElement
        const span = box_form.querySelector('span')

        span.innerHTML = mensagem

        box_form.className = 'box-input input-error'

    }

    sucessInput(input) {
        const box_form = input.parentElement

        box_form.className = 'box-input input-success'

    }
}