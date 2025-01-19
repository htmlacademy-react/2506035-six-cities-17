import Main from '../../pages/main/main.tsx';
import { RoutePath, LoginStatus } from '../../const.ts';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import NotFoundPage from '../../pages/404-not-found/404-not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import { fetchOffersAction } from '../../api/actions.ts';
import useAppSelector from '../../hooks/useAppSelector.ts';
import { Spinner } from '../spinner/spinner.tsx';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch.ts';

function App() {
  const loading = useAppSelector((state) => state.loading);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOffersAction());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <Routes>
      <Route path={RoutePath.Main} element={<Main />}/>
      <Route path={RoutePath.Login} element={<Login />}/> TODO: Обернуть логин в защищенный компонент(сделаю в след.ДЗ)
      <Route path={RoutePath.Favorites} element={
        <PrivateRoute authStatus = { LoginStatus.Auth }>
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
