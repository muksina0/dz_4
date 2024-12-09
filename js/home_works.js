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

 const childBlock = document.querySelector(".child_block");

 let positionX = 0;
 let parentBlock = 450;

 const moveBlock = () => {
     if (positionX < parentBlock) {
         childBlock.style.left = `${positionX}px`
         positionX++
     }
     requestAnimationFrame(moveBlock)
 }
 moveBlock()
