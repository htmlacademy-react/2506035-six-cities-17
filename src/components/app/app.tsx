import Main from '../../pages/main/main.tsx';
import { RoutePath } from '../../const.ts';
import { Routes, Route } from 'react-router-dom';
import { Login } from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import NotFoundPage from '../../pages/404-not-found/404-not-found.tsx';
import { PrivateRoute } from '../private-route/private-route.tsx';
import { fetchOffersAction, checkAuthAction } from '../../api/actions.ts';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuthAction());
    dispatch(fetchOffersAction());
  }, [dispatch]);

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
