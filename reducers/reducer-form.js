import {CURRENT_FORM, CURRENT_TABLE, PUSH_TO_REDUX} from '../actions/index'; //just grabbing the name, not the function

export default function(state = {}, action){
  switch (action.type){
    case CURRENT_FORM:
      console.log(state);
      return state;
    case PUSH_TO_REDUX:
      return action.formData;
  }
  return state;
}
