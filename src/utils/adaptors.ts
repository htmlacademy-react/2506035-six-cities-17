import {
  MAX_NEARBY_OFFERS,
  REVIEWS_MAX_COUNT,
} from '../const';
import { CityName, CommentType, OfferType } from '../api/types';
import { Point } from '../types';
import { getCityName } from './get-city-name';
import { isOfferFavorite } from './is-offer-favorite';

type OfferGroups = Record<CityName, OfferType[]>;

export function groupOffers(offers: OfferType[]): OfferGroups {
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

export function filterOffersByCity(offers?: OfferType[], cityId?: string): OfferType[] {
  const cityName = getCityName(cityId);
  return offers?.filter((offer) => offer.city.name === cityName) || [];
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

export function mapComments(comments: CommentType[]): CommentType[] {
  return comments
    .toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, REVIEWS_MAX_COUNT);
}

export function mapOffersNearbyToPoints(offersNearby: OfferType[]): Point[] {
  return offersNearby
    .slice(0, MAX_NEARBY_OFFERS)
    .map((nearby) => ({
      id: nearby.id,
      location: nearby.location,
    }));
}

export function mapOffersNearbyWithFavorites(offersNearby: OfferType[], favoriteOffers: OfferType[]): OfferType[] {
  return offersNearby
    .slice(0, MAX_NEARBY_OFFERS)
    .map((nearby) => ({
      ...nearby,
      isFavorite: isOfferFavorite(favoriteOffers, nearby.id),
    }));
}
