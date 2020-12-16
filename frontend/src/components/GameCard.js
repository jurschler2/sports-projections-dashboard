import React from "react";

/**
 *  DESCRIPTION: 
 *  FLOW: App => LibraryContainer
 *  PARENT: App
 *  CHILDREN: none
 */

function GameCard({game}) {

  return (

    <div className="gameCard-container">
      <span>
        Home: {game.home}
      </span>
      <span>
        Away: {game.away}
      </span>
    </div>

  )
}

export default GameCard;