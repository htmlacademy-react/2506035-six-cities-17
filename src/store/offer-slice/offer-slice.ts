import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferSliceType } from './types';
import { fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearbyAction } from '../../api/actions';
import { CommentType, OfferDetailsType, OfferType } from '../../api/types';

const initialState: OfferSliceType = {
  offersNearby: [],
  offerComments: [],
  offer: null,
  isLoadingOffer: true,
  isLoadingOfferComments: true,
  isLoadingOffersNearby: true,
};

const offerSlice = createSlice({
  name: 'offerSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOfferAction.pending, (state) => {
        state.isLoadingOffer = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, { payload }: PayloadAction<OfferDetailsType>) => {
        state.offer = payload;
        state.isLoadingOffer = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoadingOffer = false;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.isLoadingOffersNearby = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, { payload }: PayloadAction<OfferType[]>) => {
        state.offersNearby = payload;
        state.isLoadingOffersNearby = false;
      })
      .addCase(fetchOffersNearbyAction.rejected, (state) => {
        state.isLoadingOffersNearby = false;
      })
      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.isLoadingOfferComments = true;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, { payload }: PayloadAction<CommentType[]>) => {
        state.offerComments = payload;
        state.isLoadingOfferComments = false;
      })
      .addCase(fetchOfferCommentsAction.rejected, (state) => {
        state.isLoadingOfferComments = false;
      });
  },
});

export { offerSlice };
