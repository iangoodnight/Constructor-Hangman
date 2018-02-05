var answer = [];

function Word(thisWord) {
	var wordArray = thisWord.split('');
	// console.log(wordArray);
	var answer = [];
	
	for (var i = 0; i < wordArray.length; i++) {
		answer.push("_");
	}

	return answer;

}



module.exports = Word;