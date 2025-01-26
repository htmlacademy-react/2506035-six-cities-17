import { sortOffersByPopular, sortOffersByPriceHighLow, sortOffersByPriceLowHigh, sortOffersByRating } from './adaptors';
import { CityLink, SortByOptionType } from './types';
import { LocationType, OfferType } from './api/types';

export enum RoutePath {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NOT_FOUND = '*',
}

export enum LoginStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN',
}

export const URL_MARKER_DEFAULT = 'img/pin.svg';

export const URL_MARKER_CURRENT = 'img/pin-active.svg';

export const DEFAULT_CITY: LocationType = {
  latitude: 52.37454,
  longitude: 4.897976,
  zoom: 13,
};

export const RATING_MIN = 1;
export const RATING_MAX = 5;
export const REVIEW_LENGTH_MIN = 50;
export const REVIEW_LENGTH_MAX = 300;
export const REVIEW_MAX_COUNT = 10;

export const CITY_LINKS: CityLink[] = [
  {
    id: 'paris',
    displayName: 'Paris',
  },
  {
    id: 'cologne',
    displayName: 'Cologne',
  },
  {
    id: 'brussels',
    displayName: 'Brussels',
  },
  {
    id: 'amsterdam',
    displayName: 'Amsterdam',
  },
  {
    id: 'hamburg',
    displayName: 'Hamburg',
  },
  {
    id: 'dusseldorf',
    displayName: 'Dusseldorf',
  },
];

export enum SORT_BY {
  POPULAR = 'popular',
  PRICE_LOW_TO_HIGH = 'priceLowHigh',
  PRICE_HIGH_TO_LOW = 'priceHighLow',
  TOP = 'top',
}

export const SORT_BY_OPTIONS: SortByOptionType<OfferType>[] = [
  {
    sortBy: SORT_BY.POPULAR,
    label: 'Popular',
    sortingAction: sortOffersByPopular,
  },
  {
    sortBy: SORT_BY.PRICE_HIGH_TO_LOW,
    label: 'Price: high to low',
    sortingAction: sortOffersByPriceHighLow,
  },
  {
    sortBy: SORT_BY.PRICE_LOW_TO_HIGH,
    label: 'Price: low to high',
    sortingAction: sortOffersByPriceLowHigh,
  },
  {
    sortBy: SORT_BY.TOP,
    label: 'Top rated first',
    sortingAction: sortOffersByRating,
  },
];

export const MAP_URL_TEMPLATE = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

export const OFFER_CATEGORIES: Record<string, string> = {
  room: 'Room',
  apartment: 'Apartment',
  hotel: 'Hotel',
  house: 'House',
};

export const RATING_TITLE: Record<string, string> = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};
