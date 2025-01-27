import { UserData } from '../../api/types';
import { AuthStatus } from '../../api/const';

export type UserSliceType = {
  authStatus: AuthStatus;
  userData: UserData | null;
  isLoadingUser: boolean;
}
