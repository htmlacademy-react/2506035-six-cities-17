import { configureStore } from '@reduxjs/toolkit';
import {reducer} from './reducer';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({reducer});
