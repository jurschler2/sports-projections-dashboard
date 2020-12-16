import React from 'react';
import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getGamesFromAPI } from "../reducer/actions"
import GameCard from "./GameCard";

/**
 *  DESCRIPTION: 
 *  FLOW: App => Home
 *  PARENT: App
 *  CHILDREN: none
 */

function Home() {

  const games = useSelector(store => Object.values(store.games), shallowEqual);
  const dispatch = useDispatch();

  useEffect(
    function fetchGames() {
      dispatch(getGamesFromAPI())
    }, [dispatch]
  );

  const renderGames = () => {

    return games.map(g => (
      <GameCard
        game={g}
      />)
    );
  }

  return (

    <div className="home-container">
      {!games ? "Home" : renderGames()}
    </div>

  );

}


export default Home;