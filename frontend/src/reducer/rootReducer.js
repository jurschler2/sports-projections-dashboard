import produce from "immer";
import { LOAD_GAMES } from "./actionTypes";

/** */

const INITIAL_STATE = {games: {}};

const rootReducer = (state=INITIAL_STATE, action) =>
  produce(state, draft => {
    switch (action.type) {

      case LOAD_GAMES:
        draft.games = action.games;
        break;

      default:
        return draft;
    }
  });

  export default rootReducer;