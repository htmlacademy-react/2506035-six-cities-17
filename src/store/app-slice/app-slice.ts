import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppSliceType } from './types';
import { SortBy } from '../../const';

const initialState: AppSliceType = {
  city: 'paris',
  sortOffersBy: SortBy.Popular,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    changeCity(state, { payload }: PayloadAction<string>) {
      state.city = payload;
    },
    setSortOffersBy(state, { payload }: PayloadAction<SortBy>) {
      state.sortOffersBy = payload;
    },
  },
});

export const { changeCity, setSortOffersBy } = appSlice.actions;
export { appSlice };

