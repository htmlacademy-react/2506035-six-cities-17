import { Header } from '../../components/header/header';
import Footer from '../../components/footer/footer';
import FavoriteGroup from '../../components/favorite-group/favorite-group';
import { getOfferGroups } from '../../adaptors';
import useAppSelector from '../../hooks/useAppSelector';
import { OfferType } from '../../api/types';
import { Spinner } from '../../components/spinner/spinner';
import { selectFavoriteOffers, selectIsLoadingFavorites } from '../../store/favorites-slice/selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../api/actions';

function Favorites() {
  const favoriteOffers = useAppSelector(selectFavoriteOffers);
  const loading = useAppSelector(selectIsLoadingFavorites);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAction());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  const offerGroups = getOfferGroups(favoriteOffers);
  const offerKeys = Object.keys(offerGroups);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {
            offerKeys.length ? (
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {
                    offerKeys.map((groupKey) => {
                      const group: OfferType[] = offerGroups[groupKey];
                      return <FavoriteGroup key={groupKey} offers={group} city={groupKey}/>;
                    })
                  }
                </ul>
              </section>
            ) : (
              <section className="favorites favorites--empty">
                <h1 className="visually-hidden">Favorites (empty)</h1>
                <div className="favorites__status-wrapper">
                  <b className="favorites__status">Nothing yet saved.</b>
                  <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.
                  </p>
                </div>
              </section>
            )
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
