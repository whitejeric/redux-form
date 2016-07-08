
/*--------BOARD ACTIONS--------*/

export const CURRENT_BOARD = 'CURRENT_BOARD';
export const INIT_BOARD = 'INIT_BOARD';
export const SQUARE_INDEX = 'SQUARE_INDEX';
export const CURRENT_SQUARE_MARK = 'CURRENT_SQUARE_MARK';
export const MARK_SQUARE = 'MARK_SQUARE';

export function getBoardState(){
  return {
    type: CURRENT_BOARD,
  };
}

export function initBoardState(){
  return {
    type: INIT_BOARD
  };
}

export function getSquareIndex({index}){
  return {
    type: SQUARE_INDEX,
    index
  };
}

export function getSquareMark(index){
  return {
    type: CURRENT_SQUARE_MARK,
    index
  };
}

export function markSquare(index, symbol){
  return {
    type: MARK_SQUARE,
    index,
    symbol
  };
}

/*--------GAME ACTIONS--------*/

export const NEXT_TURN = 'NEXT_TURN';
export const INIT_GAME = 'INIT_GAME';
export const CURRENT_GAME_STATE = 'CURRENT_GAME_STATE';

export function initGame(){
  return {
    type: INIT_GAME
  };
}

export function nextTurn(){
  return {
    type: NEXT_TURN
  };
}

export function getGameState(){
  return {
    type: CURRENT_GAME_STATE
  };
}
