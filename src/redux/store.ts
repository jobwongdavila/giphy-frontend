import { combineReducers, configureStore } from '@reduxjs/toolkit';
import api from '../api';

const reducer = combineReducers({
  [api.reducerPath]: api.reducer
});

const store = configureStore({
  reducer
});

export default store;
