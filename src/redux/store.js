import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
  

import { filterSlice } from './filterSlice';
import { contactsReducer } from './contactsSlice';
import { authReducer } from './authReducer';


const authConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

  export const rootReducer = combineReducers({
    contact: contactsReducer,
    filter: filterSlice.reducer,
    auth: persistReducer(authConfig, authReducer),
  })


  export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  
  export const persistor = persistStore(store);

