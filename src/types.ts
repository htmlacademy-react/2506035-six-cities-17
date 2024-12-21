export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: CityName;
  location: LocationType;
}

export type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export type CardType = 'favorites' | 'cities' | 'near-places';

export type CityName = string;

export type Point = Pick<OfferType, 'id' | 'location'>;

export type ReviewType = {
  id: string;
  rating: number;
  review: string;
  userName: string;
  userAvatarUrl: string;
  date: {
    value: string;
    display: string;
  };
}
