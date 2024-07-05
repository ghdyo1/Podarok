let starth1 = document.querySelector("#hello");
let startp = document.querySelector("#summon");
let button = document.querySelector("#button");
let btntexts = ["Я кнопка", "Я помогу тебе разукрасить сайт", "Для начала нужно выбрать фон", "BACKGROUND"];
let index = 0;

function start(event){
    starth1.style.display = "none";
    startp.style.display = "none";
    let key = event.key;
    if(key == "s"){
        button.style.display = "inline-block";
    }
}
function buttonf(){
    button.innerHTML = btntexts[index];
    index++;
}

document.addEventListener("keydown", start);
button.addEventListener("click", buttonf);