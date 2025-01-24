import { configureStore } from '@reduxjs/toolkit';
import { appSlice } from './reducer';
import { createApi } from '../api/service';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const api = createApi();

export const store = configureStore({
  reducer: {
    app: appSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
