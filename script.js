let button = document.querySelector("#button");
let btntexts = []
let index = 0

function start(event){
    let key = event.key;
    if(key == "s"){
        button.style.display = "inline-block";
    }
}
function button(){
}

document.addEventListener("keydown", start);