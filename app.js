let button = document.querySelector('.button')
let textCode = document.querySelector('.linear-code')
let container = document.querySelector('.container')
const close = document.querySelector('.close')
const open = document.querySelector('.open')
const hidden = document.querySelector('.hidden')


// Array

let colors = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']


button.addEventListener('click', gradient)



function gradient(e) {
    let color1 = '#'
    let color2 = '#'
    e.preventDefault()

    for(let i = 0;i < 6;i++) {
        let colorRandom = Math.floor(Math.random() * 16)
        color1 += colors[colorRandom]
    }    
    
    
    for(let j = 0;j < 6;j++) {
        let colorRandom = Math.floor(Math.random() * 16)
        color2 += colors[colorRandom]
    }

    textCode.textContent = `Linear-gradient(90deg,${color1},${color2})`
    container.style.backgroundImage = `Linear-gradient(90deg,${color1},${color2})`
    hidden.style.backgroundImage = `Linear-gradient(90deg,${color1},${color2})`

}




open.addEventListener('click',function () {
    hidden.classList.remove('open-block')
    hidden.style.transition = '1.5s'
})

close.addEventListener('click',function () {
    hidden.classList.add('open-block')
    hidden.style.transition = '1.5s'
})