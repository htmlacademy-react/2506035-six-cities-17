import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthData, OfferType, ThunkOptions, UserData } from './types';
import { ApiRoutes } from './const';
import { dropToken, saveToken } from './token';

const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkOptions>();

export const fetchOffersAction = createAppAsyncThunk<OfferType[], undefined>(
  'offers/get',
  async (_arg, {extra: api}) => {
    const response = await api.get<OfferType[]>(ApiRoutes.OFFERS);
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
