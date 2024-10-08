import {createStore} from 'redux';
import {applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const store = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default store;
