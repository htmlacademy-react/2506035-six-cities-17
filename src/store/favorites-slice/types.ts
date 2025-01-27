import { OfferType } from '../../api/types';

export type FavoritesSliceType = {
  favoriteOffers: OfferType[];
  isLoadingFavorites: boolean;
}
