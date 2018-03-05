
var cards = [
{
rank:"queen",
suit:"hearts",
cardImage:"https://i.imgur.com/XPknU5N.png"
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"https://i.imgur.com/DntzTZ4.png"
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"https://i.imgur.com/0vKNnJ0.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"https://i.imgur.com/xuIldN5.png"
}
];
var cardsInPlay = [];
var cardId;
var checkForMatch = function(){
								if(cardsInPlay[0] === cardsInPlay[1])
								{
									alert("You found a match!");
								}else
								{
									alert("Sorry ! try again !");
								}
								};
var flipCard = function(cardId){
								console.log("User flipped " +cards[cardId].rank);
								cardsInPlay.push(cards[cardId].rank);
								console.log("cardImageSource " + cards[cardId].cardImage);
								console.log("suit  " + cards[cardId].suit);
								};
/*if(cardsInPlay.length === 2){
	console.log("There are  " + cardsInPlay.length);
}*/
checkForMatch();



flipCard(1);
flipCard(0);







