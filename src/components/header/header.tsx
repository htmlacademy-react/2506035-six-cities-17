import { Link, useNavigate } from 'react-router-dom';
import { RoutePath } from '../../const';
import './header-style.css';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { logoutAction } from '../../api/actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { AuthStatus } from '../../api/const';
import { memo } from 'react';
import { selectAuthStatus, selectUserData } from '../../store/user-slice/selectors';
import { setFavoriteOffers } from '../../store/favorites-slice/favorites-slice';
import { selectFavoriteOffers } from '../../store/favorites-slice/selectors';

function Header() {
  const authStatus = useAppSelector(selectAuthStatus);
  const user = useAppSelector(selectUserData);
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const isAuth = authStatus === AuthStatus.Auth;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleSignOut = () => {
    if (isAuth) {
      dispatch(logoutAction());
      dispatch(setFavoriteOffers([]));
    } else {
      navigate(RoutePath.Login);
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to={RoutePath.Main}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                user && (
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={RoutePath.Favorites}>
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        <img src={user.avatarUrl} alt=''/>
                      </div>
                      <span className="header__user-name user__name">{user.email}</span>
                      <span className="header__favorite-count">{favoriteOffers.length}</span>
                    </Link>
                  </li>
                )
              }
              <li className="header__nav-item">
                <button className="header__nav-link sign-out" onClick={handleSignOut}>
                  <span className="header__signout">{isAuth ? 'Sign out' : 'Sign in'}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

const MemoizedHeader = memo(Header);
export { MemoizedHeader as Header };
