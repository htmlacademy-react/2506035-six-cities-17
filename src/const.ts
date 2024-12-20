import { LocationType } from './types';

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

export const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const DEFAULT_CITY: LocationType = {
  latitude: 52.37454,
  longitude: 4.897976,
  zoom: 13,
};

export const RATING_MIN = 1;
export const RATING_MAX = 5;
export const REVIEW_LENGTH_MIN = 50;
export const REVIEW_LENGTH_MAX = 300;
