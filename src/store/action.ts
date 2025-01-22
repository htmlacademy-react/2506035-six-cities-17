import { createAction } from '@reduxjs/toolkit';
import { OfferType } from '../types';
import { SORT_BY } from '../const';

export const changeCity = createAction<string>('app/changeCity');

export const setOffersList = createAction<OfferType[]>('app/setOffersList');

export const setSortOffersBy = createAction<SORT_BY>('app/setSortOffersBy');

export const setLoading = createAction<boolean>('app/loading');
