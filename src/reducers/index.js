import { combineReducers } from 'redux';
import users from './users';
import sortUsers from './sortUsers';
import validateField from './validateField';

export default combineReducers({
  users,
  sortUsers,
  validateField
});