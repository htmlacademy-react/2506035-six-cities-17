import { SORT_BY } from '../const';
import { OfferType, UserData } from '../api/types';
import { AuthStatus } from '../api/const';

export type AppStore = {
  city: string;
  offers: OfferType[];
  sortOffersBy: SORT_BY;
  loading: boolean;
  authStatus: AuthStatus;
  error: boolean;
  userData: UserData | null;
}
