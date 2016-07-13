import {CURRENT_EDIT, POPULATE_EDIT_PAGE} from '../actions/index'; //just grabbing the name, not the function

export default function(state = {}, action){
  switch (action.type){
    case CURRENT_EDIT:
      console.log('getting edit state:');
      console.log(state);
      return state;
    case POPULATE_EDIT_PAGE:
      console.log('populating!');
      return action.contact;
  }
  return state;
}
