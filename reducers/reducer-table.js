import {CURRENT_TABLE, PUSH_TO_REDUX, REMOVE_CONTACT} from '../actions/index'; //just grabbing the name, not the function

export default function(state = [], action){
  switch (action.type){
    case CURRENT_TABLE:
      console.log(state);
      return state;
    case PUSH_TO_REDUX:
      const newState = [action.formData, ...state];
      return newState;
    case REMOVE_CONTACT:
      var removeList = [action.contact.id];

      var removedState = state.filter(function(client) {
        return removeList.indexOf(client.id) === -1;
      });

      console.log(removedState);
      return removedState;
  }
  return state;
}
