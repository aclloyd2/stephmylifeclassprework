var CorrectGuesses = 0;
var timeleft = 10;
var difficulty = 10;

var results = {
    add: 0,
    multiply: 0,
    subtract: 0
}

var symbols = {
    add: '+',
    subtract: '-',
    multiply: '*'
}

var functions = {
    add: function(number1, number2) {
        return number1 + number2;
    },
    subtract: function(number1, number2) {
        return number1 - number2;
    },
    multiply: function(number1, number2) {
        return number1 * number2;
    }
}

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
    Object.keys(results).forEach(key => {
        one = Math.floor(Math.random() * difficulty) + 1;
        two = Math.floor(Math.random() * difficulty) + 1;
        results[key] = functions[key](one, two);
        document.getElementById(key).innerText = one + " " + symbols[key] + " " + two;
        document.getElementById(key + "Answer").disabled = false;
        document.getElementById(key + "Answer").value = null;
    });
}

function check(type) {
    if (document.getElementById(type + "Answer").value == results[type]) {
        CorrectGuesses++;
        document.getElementById(type + "Answer").disabled = true;
        document.getElementById("progress").innerText = 10 - CorrectGuesses + " Left To Proceed";
        checkCorrectGuesses();
    }
}

function checkCorrectGuesses() {
    if (CorrectGuesses == 10) {
        document.getElementById("progress").innerText = " You did it!";
        window.location = "winner.html";
    }
}