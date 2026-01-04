console.log("boo!")

function colourChange(event){
    
    console.log(`${event.pageX} ${event.pageY}`)
    const red = event.pageX;
    const green = event.pageY;
    const blue = (event.pageX + event.pageY)/225
    document.body.style.background = `rgb(${red}, ${green}, ${blue})`
    document.getElementById("text").style.color = `rgb(${red}, ${blue}, 0)`
}

document.addEventListener("mousemove", colourChange);
// document.addEventListener("touchmove", colourChange);




