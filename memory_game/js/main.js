console.log("Up and running!");

// var cardOne = "king";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "queen";

// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardTwo);


var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
};



function flipCard(cardId) {

	if (cardsInPlay.length === 2) {
	checkForMatch();	
	} console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};

flipCard(0);
flipCard(1);









