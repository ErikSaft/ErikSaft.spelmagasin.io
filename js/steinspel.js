const spelarText = document.querySelector("#spelarText");
const datamaskinText = document.querySelector("#datamaskinText");
const resultatText = document.querySelector("#resultatText");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let spelar;
let datamaskin;
let resultat;
choiceBtns.forEach(button => button.addEventListener("click", () => {
    spelar = button.textContent;
    datamaskinTurn();
    spelarText.textContent = `Spelar: ${spelar}`;
    datamaskinText.textContent = `Datamaskin: ${datamaskin}`;
    resultatText.textContent = checkWinner();
}));
function datamaskinTurn(){
    const randNum = Math.floor(Math.random() * 3) +1;
    switch(randNum){
        case 1:
            datamaskin = "STEIN";
            break;
        case 2:
            datamaskin = "PAPIR";
            break;
        case 3:
            datamaskin = "SAKS";
            break;
    }
}
function checkWinner(){
    if(spelar == datamaskin){
        return "Uavgjort!";
    }
    else if(datamaskin == "STEIN"){
        return (spelar == "PAPIR") ? "Du vant!" : "Du tapte!"
    }
    else if(datamaskin == "PAPIR"){
        return (spelar == "SAKS") ? "Du vant!" : "Du tapte!"
    }
    else if(datamaskin == "SAKS"){
        return (spelar == "STEIN") ? "Du vant!" : "Du tapte!"
    }
}