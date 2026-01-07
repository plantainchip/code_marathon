console.log("hi")

const typed_num = [];

function clickHandler(event){
    // console.log("click", event.target.value);
    if(event.target.name == "end"){
        // window.location.reload()
        while(typed_num.length > 0) {
            typed_num.pop();
        }
        document.getElementById("on-screen-text").innerText = typed_num.join("")
        return
    }

    if(event.target.name == "call"){
        // window.location.reload()
        while(typed_num.length > 0) {
            typed_num.pop();
        }
        document.getElementById("on-screen-text").innerText = "calling..."
        return
    }

    if(typed_num.length == 33) return;

    typed_num.push(event.target.value)
    console.log(typed_num)
    document.getElementById("on-screen-text").innerText = typed_num.join("");
}

// document.querySelector('input[name="call"]').addEventListener("click", clickHandler)

document.querySelectorAll('input').forEach( input => {
    input.addEventListener("click", clickHandler);
});

