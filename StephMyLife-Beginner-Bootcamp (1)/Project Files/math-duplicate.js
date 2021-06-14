var timeleft = 10;
var difficulty = 10;
var result = 0;
var CorrectGuesses = 0;

function initialise() {
    var startTimer = setInterval(function() {
        if (timeleft <= 0) {
            calculate();
            timeleft = 10;
        }
        document.getElementById("countdown").innerHTML = timeleft;
        timeleft -= 1;
    }, 1000);
    document.getElementById("progress").innerText = 10 - CorrectGuesses + " Guesses Left To Proceed";
    calculate();
}

function calculate() {
    var one = 0;
    var two = 0;
    one = Math.floor(Math.random() * difficulty) + 1;
    two = Math.floor(Math.random() * difficulty) + 1;
    result = one + two;
    document.getElementById("add").innerText = one + " + " + two;
    document.getElementById("addAnswer").disabled = false;
    document.getElementById("addAnswer").value = null;

}

function add() {
    if (document.getElementById("addAnswer").value == result) {
        CorrectGuesses++;
        document.getElementById("progress").innerText = 10 - CorrectGuesses + " Guesses Left To Proceed";
        checkCorrectGuesses();
    }
}

function checkCorrectGuesses() {
    document.getElementById("addAnswer").disabled = true;
    if (CorrectGuesses == 10) {
        document.getElementById("progress").innerText = " You did it!";
    }
}