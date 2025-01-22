import { CityName, OfferType } from './types.ts';
import { CITY_LINKS, SORT_BY, SORT_BY_OPTIONS } from './const.ts';

type OfferGroups = Record<CityName, OfferType[]>;

export function getOfferGroups(offers: OfferType[]): OfferGroups {
  return offers.reduce((result: OfferGroups, offer: OfferType) => {
    const name: CityName = offer.city.name;
    (result[name] = result[name] || []).push(offer);
    return result;
  }, {});
}

export function getCityName(cityId?: string) {
  return CITY_LINKS.find((link) => link.id === cityId)?.displayName || '';
}

export function filterOffersByCity(offers: OfferType[], cityId?: string): OfferType[] {
  const cityName = getCityName(cityId);
  return offers.filter((offer) => offer.city.name === cityName) || [];
}

export function getSortByLabel(sortBy: SORT_BY) {
  return SORT_BY_OPTIONS.find((option) => option.sortBy === sortBy)?.label || '';
}

export function getSortedOffers(offers: OfferType[], sortBy: SORT_BY): OfferType[] {
  const sortingAction = SORT_BY_OPTIONS.find((option) => option.sortBy === sortBy)?.sortingAction;

  if (!sortingAction) {
    return [];
  }
  return sortingAction(offers);
}

export function sortOffersByPriceHighLow(offers: OfferType[]): OfferType[] {
  return offers.toSorted((a, b) => b.price - a.price);
}

export function sortOffersByPriceLowHigh(offers: OfferType[]): OfferType[] {
  return offers.toSorted((a, b) => a.price - b.price);
}

export function sortOffersByRating(offers: OfferType[]): OfferType[] {
  return offers.toSorted((a, b) => b.rating - a.rating);
}

export function sortOffersByPopular(offers: OfferType[]): OfferType[] {
  return offers;
}
