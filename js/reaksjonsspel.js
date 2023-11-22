let startTime;
let endTime;
let readyButton = document.getElementById('readyButton');
let resetButton = document.getElementById('resetButton');
let clickBox = document.getElementById('clickBox');

readyButton.addEventListener('click', function() {
    this.disabled = true;
    setTimeout(makeGreen, Math.random() * 5000);
});

resetButton.addEventListener('click', function() {
    clickBox.style.backgroundColor = 'red';
    document.getElementById('reactionTime').innerHTML = "";
    readyButton.disabled = false;
});

clickBox.addEventListener('click', function() {
    if (this.style.backgroundColor == 'green') {
        endTime = new Date();
        let reactionTime = (endTime - startTime) / 1000;
        document.getElementById('reactionTime').innerHTML = "Din reaksjonstid er: " + reactionTime + " sekunder";
        this.style.backgroundColor = 'red';
        readyButton.disabled = false;
    }
});

function makeGreen() {
    clickBox.style.backgroundColor = 'green';
    startTime = new Date();
}