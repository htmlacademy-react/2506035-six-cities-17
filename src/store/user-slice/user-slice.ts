import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSliceType } from './types';
import { checkAuthAction, loginAction, logoutAction } from '../../api/actions';
import { UserData } from '../../api/types';
import { AuthStatus } from '../../api/const';

const initialState: UserSliceType = {
  authStatus: AuthStatus.Unknown,
  userData: null,
  isLoadingUser: true,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(checkAuthAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(loginAction.fulfilled, (state, { payload }: PayloadAction<UserData>) => {
        state.userData = payload;
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.Auth;
      })
      .addCase(loginAction.rejected, (state) => {
        state.isLoadingUser = false;
        state.authStatus = AuthStatus.NoAuth;
      })
      .addCase(logoutAction.pending, (state) => {
        state.isLoadingUser = true;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authStatus = AuthStatus.NoAuth;
        state.userData = null;
        state.isLoadingUser = false;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.isLoadingUser = false;
      });
  },
});

export { userSlice };
