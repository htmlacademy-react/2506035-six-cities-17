import { RootState } from './index';

export const selectCity = (state: RootState) => state.app.city;

export const selectOffers = (state: RootState) => state.app.offers;

export const selectSortOffersBy = (state: RootState) => state.app.sortOffersBy;

export const selectError = (state: RootState) => state.app.error;

export const selectUserData = (state: RootState) => state.app.userData;

export const selectAuthStatus = (state: RootState) => state.app.authStatus;

export const selectLoading = (state: RootState) => state.app.loading;
