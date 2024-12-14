import { CityName, OfferType } from './types.ts';

type OfferGroups = Record<CityName, OfferType[]>;

function getOfferGroups(offers: OfferType[]): OfferGroups {
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

export { getOfferGroups };
