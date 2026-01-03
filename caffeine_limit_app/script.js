console.log("hello")

function calculateDeath(event) {
    event.preventDefault()
    console.log(event)

    const cups = 10000 / parseInt(event.target.poison.value)
    console.log(cups)
    document.getElementById("message").textContent = Math.round(cups) + " cups or cans will kill you!";
}

// define functions first then bind them like this
document.querySelector("form").addEventListener("submit", calculateDeath)