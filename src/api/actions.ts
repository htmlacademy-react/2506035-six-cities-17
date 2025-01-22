import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkOptions } from './types';
import { OfferType } from '../types';
import { ApiRoutes } from './const';
import { setLoading, setOffersList } from '../store/action';

export const fetchOffersAction = createAsyncThunk<void, undefined, ThunkOptions>(
  'offers/get',
  async (_arg, {dispatch, extra: api}) => {
    const { data, status } = await api.get<OfferType[]>(ApiRoutes.OFFERS);

    if (status === 200) {
      dispatch(setOffersList(data));
      dispatch(setLoading(false));
    }
  }
);
