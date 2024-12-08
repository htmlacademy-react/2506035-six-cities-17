import { Navigate } from 'react-router-dom';
import { LoginStatus, RoutePath } from '../../const';

type PrivateRoutProps = {
  children: JSX.Element;
  authStatus: LoginStatus;
}

function PrivateRoute({ children, authStatus }: PrivateRoutProps): JSX.Element {
  return (
    authStatus === LoginStatus.Auth ? children : <Navigate to= {RoutePath.Login}/>
  );
}

export default PrivateRoute;
