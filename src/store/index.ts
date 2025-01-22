import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './reducer';
import { createApi } from '../api/service';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const api = createApi();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
