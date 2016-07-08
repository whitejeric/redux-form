
/*--------FORM ACTIONS--------*/

export const CURRENT_FORM = 'CURRENT_FORM';
export const CURRENT_TABLE = 'CURRENT_TABLE';

export const PUSH_TO_REDUX = 'PUSH_TO_REDUX';


export function getFormState(){
  return {
    type: CURRENT_FORM
  };
}

export function pushFormToReduxState(formData){
  return {
    type: PUSH_TO_REDUX,
    formData
  };
}

export function getTableState(){
  return {
    type: CURRENT_TABLE
  };
}
