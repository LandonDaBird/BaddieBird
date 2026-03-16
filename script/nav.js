nav = document.querySelector('.nav')

window.addEventListener('scroll', () => {
    console.log(scrollY)
    if (scrollY == 420) {
        nav.classList.add('active')
    }
})
