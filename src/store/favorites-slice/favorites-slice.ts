import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritesSliceType } from './types';
import { changeFavoriteAction, fetchFavoritesAction } from '../../api/actions';
import { OfferType } from '../../api/types';

const initialState: FavoritesSliceType = {
  favoriteOffers: [],
  isLoadingFavorites: false,
};

const favoritesSlice = createSlice({
  name: 'favoritesSlice',
  initialState,
  reducers: {
    setFavoriteOffers(state, { payload }: PayloadAction<OfferType[]>) {
      state.favoriteOffers = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isLoadingFavorites = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.favoriteOffers = payload;
        state.isLoadingFavorites = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isLoadingFavorites = false;
      })
      .addCase(changeFavoriteAction.fulfilled, (state, { payload }: PayloadAction<OfferType>) => {
        if (payload.isFavorite) {
          state.favoriteOffers.push(payload);
        } else {
          const favoriteIndex = state.favoriteOffers.findIndex((offer) => offer.id === payload.id);
          state.favoriteOffers.splice(favoriteIndex, 1);
        }
      });
  },
});

export const { setFavoriteOffers } = favoritesSlice.actions;

export { favoritesSlice };
