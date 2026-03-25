Header = document.querySelector('.header')

C = ['purple', 'red', 'orange', 'yellow', 'green', 'navy']
count = 0;

Header.addEventListener('click', () => {
    Header.style.color = C[count]
    count = count + 1
    if (count == 6)
    {
        count = 0
    }
})

Header.addEventListener('hover', () => {
    Header.style.cursor = pointer
})
