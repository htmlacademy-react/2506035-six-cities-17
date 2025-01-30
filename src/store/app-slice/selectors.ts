import { RootState } from '../index.ts';

export const selectCity = (state: RootState) => state.app.city;

export const selectSortOffersBy = (state: RootState) => state.app.sortOffersBy;
