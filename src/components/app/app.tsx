import Main from '../../pages/main/main';
import { Route, Routes} from 'react-router-dom';
import { Login } from '../../pages/login/login';
import NotFoundPage from '../../pages/404-not-found/404-not-found';
import Favorites from '../../pages/favorites/favorites';
import Offer from '../../pages/offer/offer';
import { RoutePath } from '../../const';
import { PrivateRoute } from '../private-route/private-route';
import { checkAuthAction, fetchFavoritesAction, fetchOffersAction } from '../../api/actions';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthStatus } from '../../store/user-slice/selectors.ts';
import { AuthStatus } from '../../api/const.ts';

function App() {
  const authStatus = useAppSelector(selectAuthStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

  useEffect(() => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(fetchFavoritesAction());
    }
  }, [authStatus, dispatch]);

  return (
    <Routes>
      <Route path={RoutePath.Main} element={<Main />}/>
      <Route path={RoutePath.Login} element={<Login />}/>
      <Route path={RoutePath.Favorites} element={
        <PrivateRoute>
          <Favorites />
        </PrivateRoute>
      }
      />
      <Route path={RoutePath.Offer} element={<Offer />}/>
      <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage />}/>
    </Routes>
  );
}

export default App;
