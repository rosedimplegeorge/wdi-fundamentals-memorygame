
var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardId;
var checkForMatch = function(){
if(cardsInPlay[0] === cardsInPlay[1]){
alert("You found a match!");
}else
{
	alert("Sorry ! try again !");
}
}
var flipCard = function(cardId){
console.log("User flipped " +cards[cardId]);
cardsInPlay.push(cards[cardId]);
/*if(cardsInPlay.length === 2){
	console.log("There are  " + cardsInPlay.length);
}*/
checkForMatch();

};

flipCard(2);
flipCard(0);







