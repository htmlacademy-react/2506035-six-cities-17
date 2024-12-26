import { CityName, OfferType } from './types.ts';
import { CITY_LINKS } from './const.ts';

type OfferGroups = Record<CityName, OfferType[]>;

export function getOfferGroups(offers: OfferType[]): OfferGroups {
  const result: OfferGroups = {};

  offers.forEach((offer) => {
    const name: CityName = offer.city.name;

    if (result[name]) {
      result[name].push(offer);
    } else {
      result[name] = [offer];
    }
  });

  return result;
}

export function getCityName(cityId?: string) {
  return CITY_LINKS.find((link) => link.id === cityId)?.displayName || '';
}

export function filterOffersByCity(offers: OfferType[], cityId?: string): OfferType[] {
  const cityName = getCityName(cityId);
  return offers.filter((offer) => offer.city.name === cityName) || [];
}
