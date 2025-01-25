import { Link, Navigate } from 'react-router-dom';
import { RoutePath } from '../../const';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { loginAction } from '../../api/actions';
import { FormEvent, useRef } from 'react';
import useAppSelector from '../../hooks/useAppSelector';
import { AuthStatus } from '../../api/const';
import { selectAuthStatus, selectLoading } from '../../store/selectors';
import { Spinner } from '../../components/spinner/spinner';

function Login() {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const loading = useAppSelector(selectLoading);
  const authStatus = useAppSelector(selectAuthStatus);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  if (authStatus === AuthStatus.AUTH) {
    return <Navigate to={RoutePath.Main} />;
  }

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={RoutePath.Main}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" method="post" onSubmit={handleSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef}/>
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef}/>
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { Login };
