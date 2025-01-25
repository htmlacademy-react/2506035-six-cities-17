export const API_URL = 'https://16.design.htmlacademy.pro/six-cities';
export const API_TIMEOUT = 5000;
export const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export enum ApiRoutes {
  OFFERS = '/offers',
  LOGIN = '/login',
  LOGOUT = '/logout',
  NEARBY = 'nearby',
  COMMENTS = '/comments',
}

export enum AuthStatus {
  AUTH = 'auth',
  NO_AUTH = 'noAuth',
  UNKNOWN = 'unknown',
}

export const ERROR_ADD_COMMENT_MESSAGE = 'Ошибка при отправке комментария';
