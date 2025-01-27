import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api/service';
import { appSlice } from './app-slice/app-slice.ts';
import { offersSlice } from './offers-slice/offers-slice';
import { offerSlice } from './offer-slice/offer-slice';
import { userSlice } from './user-slice/user-slice';
import { favoritesSlice } from './favorites-slice/favorites-slice';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

const api = createApi();

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    offers: offersSlice.reducer,
    offer: offerSlice.reducer,
    user: userSlice.reducer,
    favorites: favoritesSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: api,
    }
  })
});
