const slidesPlay = [
    {title: 'PS2', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus suscipit laborum, numquam minima sequi, magnam non omnis ad ea commodi vero alias, minus in! Similique assumenda doloremque officiis et!', imgplay: 'img/ps2.png', imgEffect: 'img/effect button.png', classActive: 'active'},

    {title: 'PS3', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus suscipit laborum, numquam minima sequi, magnam ', imgplay: 'img/ps3.png', imgEffect: 'img/effect button.png', classActive: ''},

    {title: 'PS4', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus suscipit laborum, numquam minima sequi, magnam non omnis ad ea commodi vero alias, minus in!', imgplay: 'img/ps4.png', imgEffect: 'img/effect button.png', classActive: ''},

    {title: 'PS5', description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus ducimus suscipit laborum, numquam minima sequi, magnam non omnis ad ea commodi vero alias, minus in.', imgplay: 'img/ps5.png', imgEffect: 'img/effect button.png', classActive: ''},
]
const content_slide = document.querySelector(".content-slide")

const updateSlidePlay = (slidesPlay, container) => {
    slidesPlay.forEach(slide => {
        container.innerHTML += `
            <div class="item ${slide.classActive}">
                <div class="flex-content-slide">
                    <div class="play-img">
                        <img src="${slide.imgplay}" id="play">
                        <img src="${slide.imgEffect}" id="effect-buttons">
                    </div>
                    <div class="content-text">
                        <h4>${slide.title}</h4>

                        <p class="description">${slide.description}</p>

                        <div class="btn-info">
                            <button>Saiba mais</button>
                        </div>
                    </div>
                </div>
            </div>`
    })
}

updateSlidePlay(slidesPlay, content_slide)

