//1
 const gmailInput = document.querySelector('#gmail_input')
 const gmailButton = document.querySelector('#gmail_button')
 const gmailResult = document.querySelector('#gmail_result')

 const regExp =  /^[a-z0-9]+@gmail\.com$/

    gmailButton.onclick = () => {
       if (regExp.test(gmailInput.value)) {
        gmailResult.innerHTML ='right'
        gmailResult.style.color = 'green'
       }else{
        gmailResult.innerHTML = 'error'
        gmailResult.style.color = 'red'
       }
    }




    //2

// MOVE BLOCK

const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");
const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;


let positionX = 0;
let positionY = 0;
let direction = 1;


const moveBlock = () => {
    if(direction === 1){
        if(positionX < maxWidth) {
            childBlock.style.left = `${positionX}px`
            positionX++
        }else {
            direction = 2;
            positionX = maxWidth
        }
    }else if(direction === 2) {
        if(positionY < maxHeight && positionX >= maxWidth) {
            childBlock.style.top = `${positionY}px`
            positionY++
        }else {
            direction = 3;
        }
    }else if(direction === 3){
        if(positionX > 0 && positionY >= maxHeight){
            childBlock.style.left = `${positionX}px`
            positionX--
        }else {
            direction = 4
        }
    }else if(direction === 4) {
        if(positionY > 0 && positionX >= 0) {
            childBlock.style.top = `${positionY}px`
            positionY--
        }else {
            direction = 1;
            positionY = 0;
        }
    }

    requestAnimationFrame(moveBlock)

}
moveBlock()

/// Timer

const seconds = document.querySelector('#seconds')

let interval;
let value = 0;
let running = false ;

const start = () => {
    if(!running) {
        interval = setInterval(() => {
            value++
            seconds.innerHTML = value
        }, 1000)
    }
    running = true
}


const stop = () => {
    clearInterval(interval)
    running = false
}
const reset = () => {
    clearInterval(interval)
    value = 0
    seconds.innerHTML = value
    running = false
}

document.querySelector('#start').addEventListener('click', start)
document.querySelector('#stop').addEventListener('click', stop)
document.querySelector('#reset').addEventListener('click', reset)

