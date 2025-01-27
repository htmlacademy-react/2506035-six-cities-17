import { OfferType } from '../../api/types';

export type OffersSliceType = {
  offers: OfferType[];
  isLoadingOffers: boolean;
}
