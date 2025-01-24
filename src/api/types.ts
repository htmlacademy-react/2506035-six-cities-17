import { RootState } from '../store';
import { AxiosInstance } from 'axios';

export type ThunkOptions = {
  state: RootState;
  extra: AxiosInstance;
};

export type Token = string;

export type AuthData = {
  login: string;
  password: string;
}

export type UserData = {
  avatarUrl: string;
  email: string;
  token: Token;
  isPro: boolean;
  name: string;
}

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

export type CityName = string;

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
