const express = require("express");
const GameOdds = require("../models/gameOdds");
const EXAMPLE_FRONTEND_RESPONSE = require("../exampleData");

const router = new express.Router();

router.get("/refresh", async function (req, res, next) {

  try {

    const odds = await GameOdds.makeOdds();
    return res.json({"games": odds});

  } catch (err) {

    console.log("Failed getting all odds");

  }
});

router.get("/", async function (req, res, next) {

  try {

    return res.json(EXAMPLE_FRONTEND_RESPONSE);

  } catch (err) {

    console.log("Couldn't provide response for some reason")

  }

});

module.exports = router;
