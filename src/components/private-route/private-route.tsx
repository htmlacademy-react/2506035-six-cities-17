import { Navigate } from 'react-router-dom';
import { RoutePath } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import { AuthStatus } from '../../api/const';
import { selectAuthStatus } from '../../store/user-slice/selectors';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function PrivateRoute({children}: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  return authStatus !== AuthStatus.AUTH ? <Navigate to={RoutePath.Login} /> : children;
}

export {PrivateRoute};
