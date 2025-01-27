import { CommentType, OfferDetailsType, OfferType } from '../../api/types';

export type OfferSliceType = {
  offersNearby: OfferType[];
  offerComments: CommentType[];
  offer: OfferDetailsType | null;
  isLoadingOffer: boolean;
  isLoadingOffersNearby: boolean;
  isLoadingOfferComments: boolean;
}
