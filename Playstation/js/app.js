const itemSlide = document.querySelectorAll('.item')

let active = 0
let lastItemSlide = itemSlide.length - 1

const activeSlide = () => {
    const lastItemActive = document.querySelector('.active')
    lastItemActive.classList.remove('active')
}

const nextSlide = () => {
    document.querySelector(':root').style.setProperty('--calc-slid', 1)

    activeSlide()

    active = active >= lastItemSlide ? 0 : active + 1
    itemSlide[active].classList.add('active')
    
}

const prevSlide = () => {
    document.querySelector(':root').style.setProperty('--calc-slid', - 1)

    activeSlide()

    active = active <= 0 ? lastItemSlide : active - 1
    itemSlide[active].classList.add('active')
}

document.querySelector('.arrows #next').addEventListener('click', nextSlide)

document.querySelector('.arrows #prev').addEventListener('click', prevSlide)