var numOfGuesses = 50;
var correctlyGuessed = 0;
var correctAnswersArray = [];
var statesArray = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']

var upperCaseStates = statesArray.map(function(value) {
    return value.toUpperCase();
});

function guess() {
    var userGuess = (document.getElementById("userGuess").value).trim().toUpperCase();
    if (upperCaseStates.includes(userGuess) && !correctAnswersArray.includes(userGuess)) {
        correctAnswersArray.push(userGuess);
        document.getElementById("correct").innerText = correctAnswersArray.toString();
        document.getElementById("userGuess").value = " ";
        correctlyGuessed++;
        if (correctlyGuessed == numOfGuesses) {
            alert("Congratulations, you have made it to the next round!");
            window.location = "math.html";
        }
        var guessesLeft = numOfGuesses - correctlyGuessed;
        document.getElementById("counter").innerText = (guessesLeft) + " guesses left.";

    }
}