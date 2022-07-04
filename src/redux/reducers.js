import { combineReducers } from 'redux';
import professionalStore from './professional/reducer';

export const combinedReducers = combineReducers({
  professional : professionalStore,
});

const Reducer = (state, action) => {
    return combinedReducers(state, action);
  };
  
  export default Reducer;
  