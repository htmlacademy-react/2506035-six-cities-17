import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppStore } from './types';
import { SORT_BY } from '../const';
import { AuthStatus } from '../api/const';
import { checkAuthAction, fetchOfferAction, fetchOfferCommentsAction, fetchOffersAction, fetchOffersNearbyAction, loginAction, logoutAction } from '../api/actions';
import {CommentType, OfferDetailsType, OfferType, UserData} from '../api/types.ts';

const initialState: AppStore = {
  city: 'paris',
  offers: [],
  offersNearby: [],
  offerComments: [],
  offer: null,
  sortOffersBy: SORT_BY.POPULAR,
  loading: true,
  authStatus: AuthStatus.UNKNOWN,
  userData: null,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    changeCity(state, { payload }: PayloadAction<string>) {
      state.city = payload;
    },
    setSortOffersBy(state, { payload }: PayloadAction<SORT_BY>) {
      state.sortOffersBy = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.offers = payload;
        state.loading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, { payload }: PayloadAction<OfferDetailsType>) => {
        state.offer = payload;
        state.loading = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.offersNearby = payload;
        state.loading = false;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, { payload }: PayloadAction<CommentType[]>) => {
        state.offerComments = payload;
      })
      .addCase(checkAuthAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.loading = false;
        state.authStatus = AuthStatus.AUTH;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.loading = false;
        state.authStatus = AuthStatus.NO_AUTH;
      })
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.loading = false;
        state.authStatus = AuthStatus.AUTH;
      })
      .addCase(loginAction.rejected, (state) => {
        state.loading = false;
        state.authStatus = AuthStatus.NO_AUTH;
      })
      .addCase(logoutAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NO_AUTH;
        state.userData = null;
        state.loading = false;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { changeCity, setSortOffersBy } = appSlice.actions;
export { appSlice };
