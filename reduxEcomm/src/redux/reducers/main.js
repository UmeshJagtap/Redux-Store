import { combineReducers } from 'redux';
import { cartreducer } from './reducer';

// rootreducer
const rootred = combineReducers({
  cartreducer,
});

export default rootred;
