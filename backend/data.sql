\c sports_projections_dashboard

DROP TABLE IF EXISTS games CASCADE;

CREATE TABLE games (
  "gameKey" VARCHAR(25) PRIMARY KEY,
  home TEXT NOT NULL,
  away TEXT NOT NULL,
  "gameTime" TEXT NOT NULL,
  

)