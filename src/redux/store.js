import { configureStore,  } from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  persistStore,
} from 'redux-persist';
import storage from './storage';
import reducer from './reducers';

const initalState = {};

const persistConfig = {
  key: 'state',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

// creating store
const makeStore = (initialState) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    preloadedState: initialState,

  })
};

const store = makeStore(initalState);
const persistor = persistStore(store);

export { store, persistor, makeStore}