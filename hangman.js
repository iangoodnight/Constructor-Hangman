var inquirer = require("inquirer");

var Word = require("./app/word");
var Words = require("./app/words");

function game() {

	var lives = 6;
	var currentWord = Words[Math.floor(Math.random() * Words.length)];
	var answerArray = Word(currentWord);
	var wrongGuesses = [];
	console.log(answerArray);
	// console.log(currentWord);

	function turn() {

		inquirer.prompt([
			{
				type: "input",
				name: "userGuess",
				message: "What letter?"
			}
		]).then(function(answer) {
			var correct = false;
			// console.log("input: " + answer.userGuess);

			for (var i = 0; i < currentWord.length; i++) {
				
				if (answer.userGuess == currentWord[i]) {
					answerArray[i] = answer.userGuess;
					correct = true;
				} 
			}

			if (!correct) {
				console.log("Wrong answer!");
				lives--;
				console.log("\nYou have " + lives + " lives left!");
				wrongGuesses.push(answer.userGuess);
				console.log("\nWrong guesses: " + wrongGuesses + ".");
			}

			console.log(answerArray);
			var checkAnswer = answerArray.join("");
			// console.log("checkAnswer: " + checkAnswer);
			if (checkAnswer === currentWord) {
				console.log("You win!");
				continueScreen();

			} if (lives === 0) {
				console.log("\nYou lose! \nThe word was \"" + currentWord + "\"!");

				continueScreen();
			} else {
				turn();
			}
		});
			function continueScreen() {
				inquirer.prompt([ 
				{
					type: "confirm",
					name: "Continue",
					message: "Play again?"
				}
				]).then(function(answer) {
					if (answer.Continue) {
						game();
					} else {
						process.exit(0);
					}
				});
			}
	}

	turn();


}

game();