import { OfferDetailsType, OfferType } from '../api/types';

export function isOfferFavorite(favoriteOffers: (OfferType | OfferDetailsType)[], offerId: string): boolean {
  return favoriteOffers.find((favorite) => favorite.id === offerId)?.isFavorite || false;
}
