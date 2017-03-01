
let generateDeckOfCards = require('./deck.js');
// let playerNames = ['Jordan', 'Russell'];

// module.exports =
function gamePlay(players) {
  if (arguments.length < 1) {
    return 'Error';
  }
  if (players.length !== 2) {
    return 'Error';
  }

  let deck = generateDeckOfCards();
  // console.log(deck);

    for ( let i = 0; i = < 52; i += 2 ) {
      console.log(cards);
};

gamePlay();
