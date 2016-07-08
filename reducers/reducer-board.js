import {CURRENT_BOARD, INIT_BOARD, SQUARE_INDEX, CURRENT_SQUARE_MARK, MARK_SQUARE} from '../actions/index'; //just grabbing the name, not the function

export default function(state = [], action){
  switch (action.type){
    case CURRENT_BOARD:
      console.log(state);
      return state;
    case INIT_BOARD:
      const newBoard = [
        null, null, null,
        null, null, null,
        null, null, null
      ];
      return newBoard;
    case SQUARE_INDEX:
      return state;
    case CURRENT_SQUARE_MARK:
      return state;
    case MARK_SQUARE:
      const markedBoard = [ ...state]
      markedBoard[action.index] = action.symbol;
      return markedBoard;
  }
  return state;
}
