import React from "react";

/**
 *  DESCRIPTION: 
 *  FLOW: App => LibraryContainer
 *  PARENT: App
 *  CHILDREN: none
 */

function GameCard({game}) {

/**
 * 
 * 
 * { 'gameKey': {
 *      'gameTime': str,
 *      'home': str,
 *      'away': str,
 *      'h2h': {
 *        'odds': [],
 *      },     
 *      'spreads': {
 *        'odds': [],
 *        'points': [];
 *      },     
 *      'totals': {
 *        'odds': [],
 *        'points': [];
 *      }     
 * 
 *   }
 * }
 * 
 * 
 */

 const calculateImpliedPoints = () => {

    let awayPoints = 0;
    let homePoints = 0;

    if (!game.spreads.points || !game.totals.points) {
      return null;
    } else {

      awayPoints = (game.totals.points[0] / 2) + (game.spreads.points[0] / 2);
      homePoints = (game.totals.points[0] / 2) - (game.spreads.points[0] / 2);
      
    }

    return (

      <p className="gameCard-implied-points">
        <span>
          Implied Points: {homePoints} - {awayPoints}
        </span>
      </p>


    )
 }

console.log("This is the game object:", game);

  return (

    <div className="gameCard-container">
      <p className="gameCard-teams">
        <span>
          Home: {game.home}
        </span>
        <span>
          Away: {game.away}
        </span>
      </p>
      <p className="gameCard-h2h-odds">
        <span>
          {game.h2h.odds ? game.h2h.odds[0] : "N/A"}
          {game.h2h.odds ? game.h2h.odds[1] : "N/A"}
        </span>
      </p>
      <p className="gameCard-spreads-points">
        <span>
         Spread: {game.spreads.points ? game.spreads.points[0] : "N/A"}
         Spread: {game.spreads.points ? game.spreads.points[1] : "N/A"}
        </span>
      </p>
      <p className="gameCard-spreads-odds">
        <span>
         Spread: {game.spreads.odds ? game.spreads.odds[0] : "N/A"} 
         Spread: {game.spreads.odds ? game.spreads.odds[1] : "N/A"}
        </span>
      </p>
      {calculateImpliedPoints()}
      
    </div>

  )
}

export default GameCard;