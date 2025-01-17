import { AppDispatch, RootState } from '../store';
import { AxiosInstance } from 'axios';

export type ThunkOptions = {
  dispatch: AppDispatch;
  state: RootState;
  extra: AxiosInstance;
};
