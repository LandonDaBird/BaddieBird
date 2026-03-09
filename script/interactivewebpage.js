Box = document.querySelector = ('.box')

colors = ['blue', 'green', 'purple', 'red']
index = 0

Box.addEventListener('click', () => {
    style.rectangle.background = colors[index]
    index = index + 1
    if (index == colors.length){
        index = 0
    }
    rectangle.style.color = 'white'
})
