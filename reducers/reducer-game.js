import {NEXT_TURN, INIT_GAME, CURRENT_GAME_STATE} from '../actions/index'; //just grabbing the name, not the function

export default function(state = {}, action){
  switch (action.type){
    case CURRENT_GAME_STATE:
      console.log(state);
      return state;
    case INIT_GAME:
      const game = {
        player: 'O',
        turn: 1
      };
      return game;
    case NEXT_TURN:
      const nextTurn = {};
      if (state.player === 'X'){
        nextTurn.player = 'O';
      }
      else{
        nextTurn.player = 'X';
      }
      nextTurn.turn = state.turn + 1;
      return nextTurn;
  }
  return state;
}
