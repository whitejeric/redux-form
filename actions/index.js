
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

export const RENEW_CONTACT = 'RENEW_CONTACT';

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

export function renewContact(contact){
  return {
    type: RENEW_CONTACT,
    contact
  };
}

export function removeContact(contact){
  return{
    type: REMOVE_CONTACT,
    contact
  };
}

/*--------EDIT ACTIONS--------*/

export const POPULATE_EDIT_PAGE = 'POPULATE_EDIT_PAGE';

export const CURRENT_EDIT = 'CURRENT_EDIT';

export const EDIT_CONTACT_VALUE = 'EDIT_CONTACT_VALUE';

export const EDIT_CONTACT_BOOL = 'EDIT_CONTACT_BOOL';

export function populateEditPage(contact){
  return{
    type: POPULATE_EDIT_PAGE,
    contact
  }
}

export function editContactValue(param, value, originalValue){
  return{
    type: EDIT_CONTACT_VALUE,
    param,
    value,
    originalValue
  }
}


export function getEditState(){
  return{
    type: CURRENT_EDIT
  }
}
