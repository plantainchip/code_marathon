let mySound = new Audio('computer-mouse-click-352734.mp3')

function clickHandlerDown(){
    console.log("click!")
    mySound.currentTime = 0.1;
    mySound.play()
    document.getElementById("a-button").style = 
    "box-shadow: 4px 7px  #3f3019; width:97px; height:97px; font-size: 47px"
}

function clickHandlerUp(){
    console.log("click!")
    document.getElementById("a-button").style = "box-shadow: 5px 10px  #3f3019;"
}

document.querySelector('.button-container').addEventListener("mousedown",clickHandlerDown)
document.querySelector('.button-container').addEventListener("mouseup",clickHandlerUp)

// Sound Effect by <a href="https://pixabay.com/users/universfield-28281460/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=352734">Universfield</a> from <a href="https://pixabay.com/sound-effects//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=352734">Pixabay</a>

