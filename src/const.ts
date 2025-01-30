import { sortOffersByPopular, sortOffersByPriceHighLow, sortOffersByPriceLowHigh, sortOffersByRating } from './utils/adaptors';
import { CityLink, SortByOptionType } from './types';
import { LocationType, OfferType } from './api/types';

export enum RoutePath {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  NOT_FOUND = '*',
}

export enum UrlMarker {
  Default= 'img/pin.svg',
  Current = 'img/pin-active.svg',
}

export const defaultCity: LocationType = {
  latitude: 52.37454,
  longitude: 4.897976,
  zoom: 13,
};

export const ReviewValidation = {
  RatingMin: 1,
  RatingMax: 5,
  LengthMin: 50,
  LengthMax: 300,
} as const;

export const REVIEWS_MAX_COUNT = 10;
export const MAX_OFFER_IMAGES = 6;
export const MAX_NEARBY_OFFERS = 3;

export const cityLinks: CityLink[] = [
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

export enum SortBy {
  Popular = 'Popular',
  PriceLowHigh = 'PriceLowHigh',
  PriceHighLow = 'PriceHighLow',
  Top = 'Top',
}

export const sortByOptions: SortByOptionType<OfferType>[] = [
  {
    sortBy: SortBy.Popular,
    label: 'Popular',
    sortingAction: sortOffersByPopular,
  },
  {
    sortBy: SortBy.PriceHighLow,
    label: 'Price: high to low',
    sortingAction: sortOffersByPriceHighLow,
  },
  {
    sortBy: SortBy.PriceLowHigh,
    label: 'Price: low to high',
    sortingAction: sortOffersByPriceLowHigh,
  },
  {
    sortBy: SortBy.Top,
    label: 'Top rated first',
    sortingAction: sortOffersByRating,
  },
];

export enum MapConfig {
  UrlTemplate = 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  Attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
}

export const offerCategories: Record<string, string> = {
  room: 'Room',
  apartment: 'Apartment',
  hotel: 'Hotel',
  house: 'House',
};

export const ratingTitles: Record<string, string> = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};
