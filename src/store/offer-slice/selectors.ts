import { RootState } from '../index';

export const selectOffer = (state: RootState) => state.offer.offer;

export const selectOffersNearby = (state: RootState) => state.offer.offersNearby;

export const selectOfferComments = (state: RootState) => state.offer.offerComments;

export const selectIsLoadingOfferComments = (state: RootState) => state.offer.isLoadingOfferComments;

export const selectIsLoadingOffer = (state: RootState) => state.offer.isLoadingOffer;

export const selectIsLoadingOffersNearby = (state: RootState) => state.offer.isLoadingOffersNearby;
