import { combineReducers } from 'redux';

import user from './userReducer'
import question from './questionReducer'

export default combineReducers({ user, question })
