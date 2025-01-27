import { RootState } from '../index';

export const selectCity = (state: RootState) => state.app.city;

export const selectSortOffersBy = (state: RootState) => state.app.sortOffersBy;
