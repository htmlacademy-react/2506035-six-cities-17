import useAppSelector from './useAppSelector';
import { filterOffersByCity, getSortedOffers } from '../adaptors';
import { LocationType, OfferType, Point } from '../types';
import { DEFAULT_CITY } from '../const';

type ReturnOffers = {
  offers: OfferType[];
  points: Point[];
  city: LocationType;
}

export function useOffers(): ReturnOffers {
  const cityId = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);
  const sortBy = useAppSelector((state) => state.sortOffersBy);

  const filteredOffers = filterOffersByCity(offers, cityId);

  const points: Point[] = filteredOffers.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

  const city: LocationType = filteredOffers.length > 0 ? filteredOffers[0].city.location : DEFAULT_CITY;

  const sortedOffers = getSortedOffers(filteredOffers, sortBy);

  return {
    offers: sortedOffers,
    points,
    city,
  };
}
