box = document.querySelector('.box')

switch = "bigger"

box.addEventListener('click',() => {
    if (change == 1)
    {
        box.style.width = "200px"
        box.style.height = "200px"
        switch = "smaller"
    }
    if (switch == "smaller")
    {
        box.style.width = "50px"
        box.style.width = "50px"
    }
})

