import { exampleResponseH2H, exampleResponseSpreads, exampleResponseSpreads } from "./exampleData"

let gameNo = 1;

exampleResponseH2H.data.forEach(game => {
  console.log(`Game ${gameNo}: Home: ${game.teams[0]} Away: ${game.teams[1]}`)
  for (let i = 0; i < game.sites.length; i++) {
    if (game.sites[i].site_key === "bovada") {
      console.log(`Game ${gameNo}: Home: ${game.sites[i].odds.h2h[0]} Away: ${game.sites[i].odds.h2h[1]}`)
      break;
    }
  }
  gameNo += 1;
});

exampleResponseSpreads.data.forEach(game => {
  console.log(`Game ${gameNo}: Home: ${game.teams[0]} Away: ${game.teams[1]}`)
  for (let i = 0; i < game.sites.length; i++) {
    if (game.sites[i].site_key === "bovada") {
      console.log(`Game ${gameNo}: Home: ${game.sites[i].odds.spreads.points[0]} Away: ${game.sites[i].odds.spreads.points[1]}`)
      break;
    }
  }
  gameNo += 1;
});

exampleResponseTotals.data.forEach(game => {
  console.log(`Game ${gameNo}: Home: ${game.teams[0]} Away: ${game.teams[1]}`)
  for (let i = 0; i < game.sites.length; i++) {
    if (game.sites[i].site_key === "bovada") {
      console.log(`Game ${gameNo}: Over/Under: ${game.sites[i].odds.totals.points[0]}`)
      break;
    }
  }
  gameNo += 1;
});
