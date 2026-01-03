console.log("new")
function loadCompliment() {
    const parts = ["eyeballs are", "fingernails are", "bones are", "brain is", "heart is"];
    const adjective = ["tasty", "delicious", "scrumptious", "finger licking good"];

    const randParts = Math.floor(Math.random() * parts.length);
    const randAdjective = Math.floor(Math.random() * adjective.length);

    document.getElementById("compliment").innerHTML = "your " 
        +  parts[randParts] 
        + " " 
        + adjective[randAdjective];

    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);


    document.body.style.background = `rgb(${red} ${green} ${blue})`;
    
}

document.addEventListener("DOMContentLoaded", (event) => {
    loadCompliment()
});
