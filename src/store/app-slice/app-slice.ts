import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSliceType } from './types';
import { SORT_BY } from '../../const';

const initialState: AppSliceType = {
  city: 'paris',
  sortOffersBy: SORT_BY.POPULAR,
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
});

export const { changeCity, setSortOffersBy } = appSlice.actions;
export { appSlice };
