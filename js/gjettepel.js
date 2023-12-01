// Genererer eit tilfeldig tall mellom 1 og 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Holder styr på antall gjett gjort av brukaren
let guesses = 0;

// Funksjon for å sjekka brukarens gjett
function checkGuess() {
    // Hentar brukarens gjett frå input-feltet
    let userGuess = document.getElementById('guess').value;

    // Øker antall gjett gjort
    guesses++;

    // Samanlikner brukerens gjett med det tilfeldige tallet
    if (userGuess == randomNumber) {
        // Viser ein melding om at du vant om du gjetter rett
        document.getElementById('message').innerHTML = "Gratulerer! Du vant.";
    } else if (userGuess < randomNumber) {
        // Viser ein melding om at det er for lavt om du gjetter for lavt og antall forsøk som er igjen
        document.getElementById('message').innerHTML = "For lavt! Prøv igjen. Du har " + (5 - guesses) + " forsøk igjen.";
    } else if (userGuess > randomNumber) {
        // Viser ein melding om det er for høyt om du gjetter for høyt og antall forsøk som er igjen
        document.getElementById('message').innerHTML = "For høgt! Prøv igjen. Du har " + (5 - guesses) + " forsøk igjen.";
    }

    // Sjekker om maksimalt antall gjett er nådd
    if (guesses >= 5) {
        // Viser ein melding som indikerer at brukaren har tapt og viser det rette tallet
        document.getElementById('message').innerHTML = "Du tapte! Nummeret var " + randomNumber;
    }
}

// Funksjon for å tilbakestille spelet
function resetGame() {
    // Genererer eit nytt tilfeldig tall og tilbakestiller antall gjett
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guesses = 0;

    // Tilbakestiller meldingen og input-feltet
    document.getElementById('message').innerHTML = "Gjett et tall fra 1-100";
    document.getElementById('guess').value = "";
}