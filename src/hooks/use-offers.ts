import { useAppSelector } from './useAppSelector';
import { filterOffersByCity } from '../utils/adaptors';
import { defaultCity } from '../const';
import { LocationType, OfferType } from '../api/types';
import { Point } from '../types';
import { selectCity, selectSortOffersBy } from '../store/app-slice/selectors';
import { selectIsLoadingOffers, selectOffers } from '../store/offers-slice/selectors';
import { selectFavoriteOffers } from '../store/favorites-slice/selectors';
import { isOfferFavorite } from '../utils/is-offer-favorite';
import { getCityName } from '../utils/get-city-name';
import { getSortedOffers } from '../utils/get-sorted-offers';

type ReturnOffers = {
  offers: OfferType[];
  points: Point[];
  city: LocationType;
  isLoadingOffers: boolean;
}

export function useOffers(): ReturnOffers {
  const cityId = useAppSelector(selectCity);
  const offers = useAppSelector(selectOffers);
  const isLoadingOffers = useAppSelector(selectIsLoadingOffers);
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const sortBy = useAppSelector(selectSortOffersBy);

  const filteredOffers = filterOffersByCity(offers, cityId);

  const offersWithFavorites: OfferType[] = filteredOffers.map((offer) => ({
    ...offer,
    isFavorite: isOfferFavorite(favoriteOffers, offer.id),
  }));

  const points: Point[] = offersWithFavorites.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

  const cityName = getCityName(cityId);

  const city: LocationType = offersWithFavorites.find((offer) => offer.city.name === cityName)?.city.location || defaultCity;

  const sortedOffers = getSortedOffers(offersWithFavorites, sortBy);

  return {
    offers: sortedOffers,
    points,
    city,
    isLoadingOffers,
  };
}
