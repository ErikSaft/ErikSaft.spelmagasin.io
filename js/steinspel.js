const spelarText = document.querySelector("#spelarText"); 
const datamaskinText = document.querySelector("#datamaskinText"); 
const resultatText = document.querySelector("#resultatText"); 
const choiceBtns = document.querySelectorAll(".choiceBtn"); 

let spelar; // Variabel for å lagre spillerens valg
let datamaskin; // Variabel for å lagre datamaskinens valg
let resultat; // Variabel for å lagre resultatet

choiceBtns.forEach(button => button.addEventListener("click", () => {
    spelar = button.textContent; // Lagrer spillerens valg når ein knapp blir klikka
    datamaskinTurn(); // Kaller funksjonen for datamaskinens trekk
    spelarText.textContent = `Spelar: ${spelar}`; // Oppdaterer tekstinnholdet for spillerens valg
    datamaskinText.textContent = `Datamaskin: ${datamaskin}`; // Oppdaterer tekstinnholdet for datamaskinens valg
    resultatText.textContent = checkWinner(); // Oppdaterer tekstinnholdet for resultatet
}));
function datamaskinTurn(){
    const randNum = Math.floor(Math.random() * 3) +1; // Genererer eit tilfeldig tall mellom 1 og 3
    switch(randNum){
        case 1:
            datamaskin = "STEIN"; // Om tallet er 1, velger datamaskinen "STEIN"
            break;
        case 2:
            datamaskin = "PAPIR"; // Om tallet er 2, velger datamaskinen "PAPIR"
            break;
        case 3:
            datamaskin = "SAKS"; // Om tallet er 3, velger datamaskinen "SAKS"
            break;
    }
}
//Skjekker kven som vant
function checkWinner(){
    if(spelar == datamaskin){
        return "Uavgjort!"; // Står uavgjort om begge velger det samme
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