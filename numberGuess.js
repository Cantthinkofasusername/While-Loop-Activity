function numberGuess() {
    let num = 4;
    let guess = 0;
    while (guess != num) {
        guess = prompt("Guess a number between 1 and 10");
        if (guess > num) {
            alert("Too high!");
        }
        else if (guess < num) {
            alert("Too low!");
        }
        else {
            alert("Correct!");
            break;
        }
    }
}