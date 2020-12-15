/** Config for the Sports Projections Dashboard application. */

require("dotenv").config();

const ODDS_API_KEY = process.env.ODDS_API_KEY || "";


module.exports = {
  ODDS_API_KEY
}