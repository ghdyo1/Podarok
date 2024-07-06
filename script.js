let site = document.querySelector("body");
let starth1 = document.querySelector("#hello");
let startp = document.querySelector("#summon");
let button = document.querySelector("#button");
let btntexts = ["Я кнопка", "Я помогу тебе украсить сайт", "Для начала нужно выбрать фон", "Отправить", "Хороший выбор!", "Я считаю, что сайт красивый", "Это значит, что ты выполнила свою задачу", "Это твоя награда"];
let index = 0;
let quiz = document.querySelector("#quiz");
let q = document.querySelector("#q");
let b1 = document.querySelector("#rad1");
let b2 = document.querySelector("#rad2");
let b3 = document.querySelector("#rad3");
let v1 = document.querySelector("#v1");
let v2 = document.querySelector("#v2");
let v3 = document.querySelector("#v3");
let vs = ["Выбери фон для сайта", "Выбрать цвет: <input type=\"color\" id=\"colorbg\">", "<img src=\"good.jpeg\" style=\"height:100px\">", "<img src=\"perfect.png\" style=\"height:100px\">"];
let vi = -1;
let img = document.querySelector("#fin-img-wrap");

function start(event){
    starth1.style.display = "none";
    startp.style.display = "none";
    let key = event.key;
    if(key == "s"){
        button.style.display = "block";
    }
}
function buttonf(){
    button.innerHTML = btntexts[index];
    if(btntexts[index] == "Отправить" || btntexts[index] == "Хороший выбор!"){
        quiz.style.display = "inline-block";
        if(vi == 0){
            if(b1.checked == true){
                let a = document.querySelector("#colorbg");
                site.style.backgroundColor = a.value;
            }
            else if(b2.checked == true){
                site.style.backgroundImage = "url(good.jpeg)";
            }
            else if(b3.checked == true){
                site.style.backgroundImage = "url(perfect.png)";
            }
            quiz.style.display = "none";
        }
        quizf();
    }
    if(btntexts[index] == "Это твоя награда"){
        img.style.display = "inline-block";
    }
    else{
        index++;
    }
}
function quizf(){
    if(vi == -1){
        vi = 0;
    }
    q.innerHTML = vs[vi];
    v1.innerHTML = vs[vi+1];
    v2.innerHTML = vs[vi+2];
    v3.innerHTML = vs[vi+3];
}

document.addEventListener("keydown", start);
button.addEventListener("click", buttonf);