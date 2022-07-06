import { combineReducers } from 'redux';
import professionalStore from './professional/reducer';
import loginStore from './login/reducer';

export const combinedReducers = combineReducers({
  professional : professionalStore,
  login: loginStore
});

const Reducer = (state, action) => {
  return combinedReducers(state, action);
};
  
export default Reducer;
  