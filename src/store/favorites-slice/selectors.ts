import { RootState } from '../index';

export const selectFavoriteOffers = (state: RootState) => state.favorites.favoriteOffers;

export const selectIsLoadingFavorites = (state: RootState) => state.favorites.isLoadingFavorites;
