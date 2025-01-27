import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, CommentPayloadType, CommentType, OfferDetailsType, OfferType, ThunkOptions, UserData} from './types';
import { ApiRoutes, ERROR_CHANGE_FAVORITE_MESSAGE } from './const';
import { dropToken, saveToken } from './token';

const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkOptions>();

export const fetchOffersAction = createAppAsyncThunk<OfferType[], undefined>(
  'offers/get',
  async (_arg, {extra: api}) => {
    const response = await api.get<OfferType[]>(ApiRoutes.OFFERS);
    return response?.data;
  }
);

export const fetchOfferAction = createAppAsyncThunk<OfferDetailsType, { offerId: string }>(
  'offer/get',
  async ({ offerId }, {extra: api}) => {
    const response = await api.get<OfferDetailsType>(`${ApiRoutes.OFFERS}/${offerId}`);
    return response?.data;
  }
);

export const fetchOffersNearbyAction = createAppAsyncThunk<OfferType[], { offerId: string }>(
  'offer/nearby',
  async ({ offerId }, {extra: api}) => {
    const response = await api.get<OfferType[]>(`${ApiRoutes.OFFERS}/${offerId}/${ApiRoutes.NEARBY}`);
    return response?.data;
  }
);

export const fetchOfferCommentsAction = createAppAsyncThunk<CommentType[], { offerId: string }>(
  'offer/comments',
  async ({ offerId }, {extra: api}) => {
    const response = await api.get<CommentType[]>(`${ApiRoutes.COMMENTS}/${offerId}`);
    return response?.data;
  }
);

export const addOfferCommentAction = createAppAsyncThunk<CommentPayloadType, { offerId: string; payload: CommentPayloadType }>(
  'offer/addComment',
  async ({ offerId, payload }, {extra: api}) => {
    const response = await api.post<CommentPayloadType>(`${ApiRoutes.COMMENTS}/${offerId}`, payload);
    return response?.data;
  }
);

export const checkAuthAction = createAppAsyncThunk<UserData, undefined>(
  'user/check',
  async (_arg, {extra: api}) => {
    const response = await api.get<UserData>(ApiRoutes.LOGIN);
    return response?.data;
  }
);

export const loginAction = createAppAsyncThunk<UserData, AuthData>(
  'user/login',
  async ({ login, password}, {extra: api}) => {
    const response = await api.post<UserData>(ApiRoutes.LOGIN, { email: login, password });
    if (response) {
      saveToken(response.data.token);
    }
    return response?.data;
  }
);

export const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(ApiRoutes.LOGOUT);
    dropToken();
  }
);

export const fetchFavoritesAction = createAppAsyncThunk<OfferType[], undefined>(
  'offers/favorites',
  async (_arg, {extra: api}) => {
    const response = await api.get<OfferType[]>(ApiRoutes.FAVORITE);
    return response?.data;
  }
);

export const changeFavoriteAction = createAppAsyncThunk<OfferType, { offerId: string; status: number }>(
  'offer/changeFavorite',
  async ({ offerId, status }, {getState, extra: api}) => {
    const { data } = await api.post<OfferDetailsType>(`${ApiRoutes.FAVORITE}/${offerId}/${status}`);

    const {offers} = getState().offers;
    const currentOffer = offers.find((offer) => offer.id === data.id);

    if (!currentOffer) {
      throw new Error(ERROR_CHANGE_FAVORITE_MESSAGE);
    }

    const result: OfferType = {
      ...currentOffer,
      isFavorite: data.isFavorite,
    };

    return result;
  }
);
