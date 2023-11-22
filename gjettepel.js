let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
    let userGuess = document.getElementById('guess').value;
    guesses++;

    if (userGuess == randomNumber) {
        document.getElementById('message').innerHTML = "Gratulerer! Du vant.";
    } else if (userGuess < randomNumber) {
        document.getElementById('message').innerHTML = "For lavt! Prøv igjen. Du har " + (7 - guesses) + " forsøk igjen.";
    } else if (userGuess > randomNumber) {
        document.getElementById('message').innerHTML = "For høgt! Prøv igjen. Du har " + (7 - guesses) + " forsøk igjen.";
    }

    if (guesses >= 7) {
        document.getElementById('message').innerHTML = "Du tapte! Nummeret var  " + randomNumber;
    }


 
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = 0;
    document.getElementById('message').innerHTML = "Gjett eit tall ifrå 1-100";
    document.getElementById('guess').value = "";
}