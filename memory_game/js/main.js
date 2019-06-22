console.log("Up and running!");

// var cardOne = "king";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "queen";

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);


var cards = ["queen", "king", "queen", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped queen");

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("user flipped king");

if ( cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again.");
	}
}

