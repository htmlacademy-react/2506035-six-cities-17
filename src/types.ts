import { SORT_BY } from './const.ts';
import { OfferType } from './api/types.ts';

export type CardType = 'favorites' | 'cities' | 'near-places';

export type Point = Pick<OfferType, 'id' | 'location'>;

export type CityLink = {
  id: string;
  displayName: string;
};

export type SortByOptionType<T> = {
  sortBy: SORT_BY;
  label: string;
  sortingAction: (array: T[]) => T[];
};
