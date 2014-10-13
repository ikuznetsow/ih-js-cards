function WhoWins(player1,player2){
	if (player1 === null || 
		  player2 === null){ 
		    throw "Pls deal the cards carefully!";
   	}
  if (player1.length != player2.length) { 
		    throw "Pls deal the cards equally!";
   	}
  var cards = "123456789JQK"
  var points1 = 0;
  var points2 = 0;
  
  var i;

  for (i = 0; i < player1.length; i++){
		if (cards.indexOf(player1[i]) > cards.indexOf(player2[i])) {
			++points1;
		}
		else if (cards.indexOf(player1[i]) < cards.indexOf(player2[i])) {
			++points2;
		}	
  }

	if (points1 > points2) {
		return "Player1 wins " + points1 + " to " + points2;
	}
	else if (points2 > points1){
		return "Player2 wins " + points2 + " to " + points1;
	}
	else{
		return "Tied";
	}


};