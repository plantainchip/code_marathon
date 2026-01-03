console.log("hello")

function roll(event){
    const faces = "⚀⚁⚂⚃⚄⚅"
    document.getElementsByClassName("die")[0].innerHTML = faces[(Math.floor(Math.random() * 5) )]
}

document.getElementsByClassName("die")[0].addEventListener("click",roll)