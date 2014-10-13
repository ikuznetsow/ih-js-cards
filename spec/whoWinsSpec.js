// TODO LIST (examples):
// whoWins(null, null) -> throws an Error
// whoWins([],[]); -> "Tie"
// whoWins(['1'], ['2']); -> "Player2 wins 1 to 0"
// whoWins(['2'], ['1']); -> "Player1 wins 1 to 0"
// whoWins(['2', '1'],['1','2']); -> "Tie"


describe("Who wins testing", function() {

  it("One player wins a turn.", function() {
  	expect( WhoWins(['1'], ['2']) ).toEqual("Player2 wins 1 to 0")
  	expect( WhoWins(['2'], ['1']) ).toEqual("Player1 wins 1 to 0")
  });

  it ("One turn; tied game.", function (){
  	expect( WhoWins(['1'],['1']) ).toEqual("Tied");
  });

  it ("One turn; null hand.", function (){
  	expect(function(){
  		 WhoWins(null, null);
  	}).toThrow("Pls deal the cards carefully!");
  });

  it("One player wins two turns.", function (){
  	expect(WhoWins(['1', '1'],['2','2'])).toEqual("Player2 wins 2 to 0");
  });

  it("Adding evaluation of K Q J", function (){
  	expect(WhoWins(['K'],['Q'])).toEqual("Player1 wins 1 to 0");
  });

  it("adds evaluation of multiple cards in one hand", function (){
  	expect(WhoWins(['K', '9', 'J'], ['Q', 'J', '5'])).toEqual("Player1 wins 2 to 1")
  });

});