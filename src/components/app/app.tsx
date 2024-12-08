import Main from '../../pages/main/main.tsx';
import { Settings, RoutePath, LoginStatus } from '../../const.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../../pages/login/login.tsx';
import Offer from '../../pages/offer/offer.tsx';
import Favorites from '../../pages/favorites/favorites.tsx';
import NotFoundPage from '../../pages/404-not-found/404-not-found.tsx';
import PrivateRoute from '../private-route/private-route.tsx';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Main} element={<Main allPlace={ Settings.AllPlace } placeCount={ Settings.PlaceCount }/>}/>
        <Route path={RoutePath.Login} element={<Login/>}/>
        <Route
          path={RoutePath.Favorites}
          element={
            <PrivateRoute authStatus = { LoginStatus.NotAuth }>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path={RoutePath.Offer} element={<Offer/>}/>
        <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
