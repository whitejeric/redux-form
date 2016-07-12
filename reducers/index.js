import { combineReducers } from 'redux';
import FormReducer from './reducer-form';
import TableReducer from './reducer-table';
import EditReducer from './reducer-edit';

const rootReducer = combineReducers({
  form: FormReducer,
  table: TableReducer,
  edit: EditReducer
});

export default rootReducer;
