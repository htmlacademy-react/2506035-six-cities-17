import { RootState } from '../index';

export const selectOffers = (state: RootState) => state.offers.offers;

export const selectIsLoadingOffers = (state: RootState) => state.offers.isLoadingOffers;
