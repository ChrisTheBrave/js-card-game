
let buildDeck = require('./deck.js');
// let playerNames = ['Jordan', 'Russell'];

module.exports = function gamePlay(players) {
  if (arguments.length < 1) {
    return 'Error';
  }
  if (players.length !== 2) {
    return 'Error';
  }

  let gameResults = {
  date: 'MM-DD-YYYY at HH:mm',   // (with the actual date/time of this game)
  players: [
    { name: '[first players name]', numberOfWins: 0, winRatio: 0 },
    { name: '[second players name]', numberOfWins: 0, winRatio: 0 }
  ],
  numberOfTies: 0
};
  let deck = buildDeck();


  for ( let i = 0; i < 52; i += 2 ) {
    console.log( deck[i], deck[i+1] );
  if ( deck[i] > deck[i+1] ){
    gameResults.players[0].numberOfWins++;

  } else if ( deck[i] < deck[i+1]  ) {
    gameResults.players[1].numberOfWins++;

  } else {
    gameResults.numberOfTies++;
  }


  }

  return gameResults;

};











  //
  //
  //
  //
  //
  //
  //
  // if (arguments.length < 1) {
  //   return 'Error';
  // }
  // if (players.length !== 2) {
  //   return 'Error';
  // }


  //let deck = generateDeckOfCards();
  // console.log(deck);

    // for ( let i = 0; i = < 52; i += 2 ) {
    //   console.log(cards);
    // return gameResults;
