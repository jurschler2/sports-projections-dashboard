const express = require("express");
const GameOdds = require("../models/gameOdds");

const router = new express.Router();

router.get("/", async function (req, res, next) {

  try {

    const odds = await GameOdds.makeOdds();
    return res.json({"games": odds});

  } catch (err) {

    console.log("Failed getting all odds");

  }
});

module.exports = router;
