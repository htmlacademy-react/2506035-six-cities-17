import { RootState } from './index';

export const selectCity = (state: RootState) => state.app.city;

export const selectOffers = (state: RootState) => state.app.offers;

export const selectOffer = (state: RootState) => state.app.offer;

export const selectOffersNearby = (state: RootState) => state.app.offersNearby;

export const selectOfferComments = (state: RootState) => state.app.offerComments;

export const selectSortOffersBy = (state: RootState) => state.app.sortOffersBy;

export const selectUserData = (state: RootState) => state.app.userData;

export const selectAuthStatus = (state: RootState) => state.app.authStatus;

export const selectLoading = (state: RootState) => state.app.loading;
