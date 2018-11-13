import {combineReducers} from 'redux';
import UserReducder from './reducer-user';
import ActiveUser from './reducer-active-user';

const allReducers = combineReducers({
  users: UserReducder,
  activeuser : ActiveUser
});

export default allReducers;
