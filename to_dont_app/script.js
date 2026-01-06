console.log("do this")

var item_count = 0;
var items = [];

function listNewItem(itemValue){
    document.querySelector(".collection").innerHTML += 
    `
    <div class="item-no-${item_count}">
        <input type="checkbox" id="item${item_count}"/>
        <label id="label${item_count}"> 
            <span class="todont-item">${itemValue}</span>
            <span data-itemNo=${item_count} class="deleteX" onclick="deleteNewItem(event)" >×</span>
            <br> 
        </label> 
    </div>
    `

    item_count++;
    console.log(document.getElementsByClassName("deleteX"))
    document.getElementById("newItemInput").value = ""
}

function deleteNewItem(event){
    const targetNo = event.target.dataset['itemno'];
    // this prints hidden data
    // console.log(event.target.dataset);
    console.log(event.target.dataset['itemno']);
    document.getElementById(`label${targetNo}`).remove();
    document.getElementById(`item${targetNo}`).remove();

    items.splice(targetNo, 1)
    localStorage.setItem("todontlist", JSON.stringify(items));

    item_count--;

}

function clickHandler(e) {
    const value = document.querySelector("#newItemInput").value;
    listNewItem(value);
    items.push(value);
    localStorage.setItem("todontlist", JSON.stringify(items));
}

function rehydrate(){
    if (localStorage.todontlist){
        items = JSON.parse(localStorage.todontlist);
        for (let i in items) {
            listNewItem(items[i]);
        }
    }
}

rehydrate()

document.getElementById("new_item").addEventListener("click", clickHandler);
document.getElementById("newItemInput").addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault;
        document.getElementById("new_item").click();
    }
})

