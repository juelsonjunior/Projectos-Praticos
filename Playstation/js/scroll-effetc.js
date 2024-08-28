const options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.75
};
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.75) {
            entry.target.classList.add('show')
        } else {
           setTimeout(() => {
            entry.target.classList.remove('show')
            console.log('ja')
           }, 1200);
        }
    })
    console.log(entries)
},options)

const contentHidden = document.querySelectorAll(".hidden")

contentHidden.forEach(content => {
    myObserver.observe(content)
})