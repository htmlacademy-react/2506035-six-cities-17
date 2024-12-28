import { OfferType } from '../types';
import { SORT_BY } from '../const';

export type AppStore = {
  city: string;
  offers: OfferType[];
  sortOffersBy: SORT_BY;
}
