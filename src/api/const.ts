export const ApiConfigType = {
  Url: 'https://16.design.htmlacademy.pro/six-cities',
  Timeout: 5000,
  TokenKeyName: 'six-cities-token',
} as const;

export enum ApiRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Nearby = 'nearby',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum AuthStatus {
  Auth = 'Auth',
  NoAuth = 'NoAuth',
  Unknown = 'Unknown',
}

export enum ApiError {
  AddCommentMessage = 'Ошибка при отправке комментария',
  ChangeFavoriteMessage = 'Ошибка при работе с избранным',
}
