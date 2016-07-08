import {CURRENT_TABLE} from '../actions/index'; //just grabbing the name, not the function

export default function(state = [], action){
  switch (action.type){
    case CURRENT_TABLE:
      console.log(state);
      return state;
  }
  return state;
}
