
/*--------FORM ACTIONS--------*/

export const CURRENT_FORM = 'CURRENT_FORM';

export const OPEN_FORM = 'OPEN_FORM';

export const HIDE_FORM = 'HIDE_FORM';


export function getFormState(){
  return {
    type: CURRENT_FORM
  };
}

export function openForm(){
  return{
    type: OPEN_FORM
  };
}

export function hideForm(){
  return{
    type: HIDE_FORM
  };
}

/*--------TABLE ACTIONS--------*/

export const CURRENT_TABLE = 'CURRENT_TABLE';

export const PUSH_TO_REDUX = 'PUSH_TO_REDUX';

export const REMOVE_CONTACT = 'REMOVE_CONTACT';

export function getTableState(){
  return {
    type: CURRENT_TABLE
  };
}

export function pushFormToReduxState(formData){
  return {
    type: PUSH_TO_REDUX,
    formData
  };
}

export function removeContact(contact){
  return{
    type: REMOVE_CONTACT,
    contact
  }
}

/*--------EDIT ACTIONS--------*/

export const POPULATE_EDIT_PAGE = 'POPULATE_EDIT_PAGE';

export function populateEditPage(contact){
  return{
    type: POPULATE_EDIT_PAGE,
    contact
  }
}
