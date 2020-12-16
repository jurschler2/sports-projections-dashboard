import axios from "axios";
import { LOAD_GAMES } from "./actionTypes";

const BASE_URL = "http://localhost:5000/";

export function loadGames(gamesData) {
  return {
    type: LOAD_GAMES,
    games: gamesData
  }
}

export function getGamesFromAPI() {
  return async function(dispatch) {
    try {
      let res = await axios.get(BASE_URL);
      dispatch(loadGames(res.data.games))
    } catch (err) {
      console.log("Couldn't GET games from the backend")
    }
  }
}