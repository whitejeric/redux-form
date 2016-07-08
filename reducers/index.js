import { combineReducers } from 'redux';
import FormReducer from './reducer-form';
import TableReducer from './reducer-table';

const rootReducer = combineReducers({
  form: FormReducer,
  table: TableReducer
});

export default rootReducer;
