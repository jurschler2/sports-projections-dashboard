/** Database model for odds for a game */

// import { exampleResponseH2H, exampleResponseSpreads, exampleResponseTotals } from "../exampleData"
const { ODDS_API_KEY } = require("../config");

// const db = require("../db");
const axios = require("axios");

/** Odds for Games on the site. */

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


const ODDS_BASE_URL = `https://api.the-odds-api.com/v3/odds`

class GameOdds {

  static async makeOdds() {

    let newOdds = {};

    const h2hResponse = await GameOdds.getOddsFromAPI('americanfootball_nfl', 'h2h');
    const spreadsResponse = await GameOdds.getOddsFromAPI('americanfootball_nfl', 'spreads');
    const totalsResponse = await GameOdds.getOddsFromAPI('americanfootball_nfl', 'totals');

    h2hResponse.data.forEach(game => {
      let gameTime = game.commence_time.slice(0, 10);
      let gameKey = gameTime + game.teams[0] + game.teams[1];
      newOdds[gameKey] = { gameTime, "home": game.teams[0], "away":game.teams[1], "h2h": {}, "spreads": {}, "totals": {} };
      for (let i = 0; i < game.sites.length; i++) {
        if (game.sites[i].site_key === "bovada") {
          newOdds[gameKey].h2h.odds = game.sites[i].odds.h2h;
          break;
        }
      }
    });

    spreadsResponse.data.forEach(game => {
      let gameTime = game.commence_time.slice(0, 10);
      let gameKey = gameTime + game.teams[0] + game.teams[1];
      for (let i = 0; i < game.sites.length; i++) {
        if (game.sites[i].site_key === "bovada") {
          newOdds[gameKey].spreads["odds"] = game.sites[i].odds.spreads.odds;
          newOdds[gameKey].spreads["points"] = game.sites[i].odds.spreads.points;
          break;
        }
      }
    });

    totalsResponse.data.forEach(game => {
      let gameTime = game.commence_time.slice(0, 10);
      let gameKey = gameTime + game.teams[0] + game.teams[1];
      for (let i = 0; i < game.sites.length; i++) {
        if (game.sites[i].site_key === "bovada") {
          newOdds[gameKey].totals["odds"] = game.sites[i].odds.totals.odds;
          newOdds[gameKey].totals["points"] = game.sites[i].odds.totals.points;
          break;
        }
      }
    });
    return newOdds;
  }

  static async getOddsFromAPI(sport, type) {

    try {

      const response = await axios.get(ODDS_BASE_URL, {
        params: {
          apiKey: ODDS_API_KEY,
          sport: sport,
          region: 'us',
          mkt: type,
          dateFormat: 'iso',
          oddsFormat: 'american'
        }
      });
      return response.data;

    } catch (err) {

      console.log("Cannot access Odds API")

    }

  }

}

// import { exampleResponseH2H, exampleResponseSpreads, exampleResponseSpreads } from "./exampleData"

// let gameNo = 1;

// exampleResponseH2H.data.forEach(game => {
//   console.log(`Game ${gameNo}: Home: ${game.teams[0]} Away: ${game.teams[1]}`)
//   for (let i = 0; i < game.sites.length; i++) {
//     if (game.sites[i].site_key === "bovada") {
//       console.log(`Game ${gameNo}: Home: ${game.sites[i].odds.h2h[0]} Away: ${game.sites[i].odds.h2h[1]}`)
//       break;
//     }
//   }
//   gameNo += 1;
// });

// exampleResponseSpreads.data.forEach(game => {
//   console.log(`Game ${gameNo}: Home: ${game.teams[0]} Away: ${game.teams[1]}`)
//   for (let i = 0; i < game.sites.length; i++) {
//     if (game.sites[i].site_key === "bovada") {
//       console.log(`Game ${gameNo}: Home: ${game.sites[i].odds.spreads.points[0]} Away: ${game.sites[i].odds.spreads.points[1]}`)
//       break;
//     }
//   }
//   gameNo += 1;
// });

// exampleResponseTotals.data.forEach(game => {
//   console.log(`Game ${gameNo}: Home: ${game.teams[0]} Away: ${game.teams[1]}`)
//   for (let i = 0; i < game.sites.length; i++) {
//     if (game.sites[i].site_key === "bovada") {
//       console.log(`Game ${gameNo}: Over/Under: ${game.sites[i].odds.totals.points[0]}`)
//       break;
//     }
//   }
//   gameNo += 1;
// });

module.exports = GameOdds;