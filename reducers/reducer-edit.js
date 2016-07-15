import {CURRENT_EDIT, POPULATE_EDIT_PAGE, EDIT_CONTACT_VALUE} from '../actions/index'; //just grabbing the name, not the function

export default function(state = {}, action){
  switch (action.type){
    case CURRENT_EDIT:
      console.log('getting edit state:');
      console.log(state);
      return state;
    case POPULATE_EDIT_PAGE:
      console.log('populating!');
      return Object.assign({}, action.contact, ...action.contact, {
        editedBools: {
          Name: false,
          Phone: false,
          Email: false,
          Company: false,
          Address: false,
          Notes: false,
          Picture: false
        }
      });
    case EDIT_CONTACT_VALUE:
      var isItEdited = !(action.value === action.originalValue);
      return Object.assign({}, state, ...state, {
        [action.param]: action.value,
        editedBools: Object.assign({}, state.editedBools, ...state.editedBools,{
          [action.param]: isItEdited
        })
      });
  }
  return state;
}
