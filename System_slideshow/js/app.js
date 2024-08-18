'use_strict';

const images = [
    { 'id': '1', 'url': '../img/chrono.jpg' },
    { 'id': '2', 'url': '../img/inuyasha.jpg' },
    { 'id': '3', 'url': '../img/ippo.png' },
    { 'id': '4', 'url': '../img/tenchi.jpg' },
    { 'id': '5', 'url': '../img/tenjhotenge.jpg' },
    { 'id': '6', 'url': '../img/yuyuhakusho.jpg' }
]

const containerItems = document.querySelector('#container-items')
const containerindicators = document.querySelector('#indicators')

const loadIndicatiors = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `<span data-number='${image.id}'>${image.id}</span>`
    })
}

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item' data-number='${image.id}'>
                <img src='${image.url}'>
            </div>
        `
    });
}
loadImages(images, containerItems)
loadIndicatiors(images, containerindicators)

let items = document.querySelectorAll('.item')

const removeclassSelect = () => {
    const indicators = document.querySelectorAll('span')
    indicators.forEach(indicator => indicator.classList.remove('selected'))
}
const selectindicators = (number) => {
    removeclassSelect()
    const indicator = document.querySelector(`span[data-number="${number}"]`)
    indicator.classList.add('selected')
}

const previous = () => {
    let items = document.querySelectorAll('.item')
    containerItems.appendChild(items[0])
    selectindicators(items[1].dataset.number)
}

const next = () => {
    let items = document.querySelectorAll('.item')
    let lastItem = items[images.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    selectindicators(items[1].dataset.number)
}

document.querySelector('#previous').addEventListener('click', previous)
document.querySelector('#next').addEventListener('click', next)




