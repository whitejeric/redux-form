import { combineReducers } from 'redux';
import BoardReducer from './reducer-board';
import GameReducer from './reducer-game';

const rootReducer = combineReducers({
  board: BoardReducer,
  game: GameReducer
});

export default rootReducer;
