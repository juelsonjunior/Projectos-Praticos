const form_login = document.querySelector('.form-login')
const modal_img_games = document.querySelector('.modal')

const exibirModalgames = (index) => {
    const img_modal = document.querySelector('.body-modal img')
    const img_games = document.querySelectorAll('.games img')[index].src

    modal_img_games.classList.add("active")

    img_modal.src = img_games
}

document.querySelector('.login span').addEventListener("click", () => {
    form_login.classList.toggle('active')
})
modal_img_games.addEventListener('click', () => {
    modal_img_games.classList.remove("active")
})
document.querySelectorAll('.games').forEach((card, indexCard) => {
    card.addEventListener('click', () => {
        exibirModalgames(indexCard)
    })
})

const menu_hamburguer = document.querySelector('.menu-hamburguer')
const menu_mobile = document.querySelector('.flex-menu')



menu_hamburguer.addEventListener('click', () => {
    menu_mobile.classList.toggle('active')
})