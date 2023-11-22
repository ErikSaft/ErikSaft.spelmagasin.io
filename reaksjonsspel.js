let startTime;
let endTime;

document.getElementById('clickBox').addEventListener('click', function() {
    if (this.style.backgroundColor == 'green') {
        endTime = new Date();
        let reactionTime = (endTime - startTime) / 1000;
        document.getElementById('reactionTime').innerHTML = "Your reaction time is: " + reactionTime + " seconds";
        this.style.backgroundColor = 'red';
    }
});

function makeGreen() {
    document.getElementById('clickBox').style.backgroundColor = 'green';
    startTime = new Date();
}

setTimeout(makeGreen, Math.random() * 5000);