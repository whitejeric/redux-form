import {CURRENT_TABLE, PUSH_TO_REDUX, REMOVE_CONTACT, HAS_BEEN_EDITED, RENEW_CONTACT} from '../actions/index'; //just grabbing the name, not the function

export default function(state = [], action){
  switch (action.type){
    case CURRENT_TABLE:
      console.log(state);
      return state;
    case PUSH_TO_REDUX:
      const newState = [action.formData, ...state];
      return newState;
    case REMOVE_CONTACT:
      const removeList = [action.contact.id];

      const removedState = state.filter(function(client) {
        return removeList.indexOf(client.id) === -1;
      });
      return removedState;

    case RENEW_CONTACT:
      const replaceList = [action.contact.id];

      const repalcedState = state.filter(function(client) {
        return replaceList.indexOf(client.id) === -1;
      });
      return [action.contact, ...repalcedState];
    }
  return state;
}
