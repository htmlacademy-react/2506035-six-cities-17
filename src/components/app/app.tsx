import Main from '../../pages/main/main.tsx';
import { RoutePath, LoginStatus } from '../../const.ts';
import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import NotFoundPage from '../../pages/404-not-found/404-not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

function App() {
  return (
    <Routes>
      <Route path={RoutePath.Main} element={<Main />}/>
      <Route path={RoutePath.Login} element={<Login />}/>
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
