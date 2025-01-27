import { RootState } from '../index';

export const selectUserData = (state: RootState) => state.user.userData;

export const selectAuthStatus = (state: RootState) => state.user.authStatus;

export const selectIsLoadingUser = (state: RootState) => state.user.isLoadingUser;
