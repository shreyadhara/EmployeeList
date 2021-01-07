import {createStore, applyMiddleware, combineReducers} from 'redux';
import EmployeeListReducer from './Reducer/EmployeeListReducer';
import LoginReducer from './Reducer/LoginReducer';
import thunk from 'redux-thunk';

const rootReducer=combineReducers({
  emp:EmployeeListReducer,
  login:LoginReducer,
})

const store=createStore(rootReducer,applyMiddleware(thunk));
export default store;
