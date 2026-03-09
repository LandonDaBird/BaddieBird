hoverBox.querySelector = ('.box')

hoverBox.addEventListener('click', () => {
    hoverBox.style.height = "30px"
    hoverBox.style.width = "125px"
})

hoverBox.addEventListener('dblclick', () => {
    hoverBox.style.height = "60px"
    hoverBox.style.width = "250px"
})
