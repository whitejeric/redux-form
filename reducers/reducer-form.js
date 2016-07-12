import {CURRENT_FORM, OPEN_FORM, HIDE_FORM} from '../actions/index'; //just grabbing the name, not the function

export default function(state = {}, action){
  switch (action.type){
    case CURRENT_FORM:
      console.log(state);
      return state;
    case OPEN_FORM:
      console.log('Show form!');
      var showState = state;
      showState.showForm = true;
      return showState;
    case HIDE_FORM:
      console.log('Hide form!');
      var hideState = state;
      hideState.showForm = false;
      return hideState;
  }
  return state;
}
