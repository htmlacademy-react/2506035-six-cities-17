import { Header } from '../../components/header/header';
import { Footer } from '../../shared/footer/footer';
import FavoriteGroup from '../../components/favorite-group/favorite-group';
import { useAppSelector } from '../../hooks/useAppSelector';
import { OfferType } from '../../api/types';
import { Spinner } from '../../shared/spinner/spinner';
import { selectFavoriteOffers, selectIsLoadingFavorites } from '../../store/favorites-slice/selectors';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchFavoritesAction } from '../../api/actions';
import { FavoritesEmpty } from '../../shared/favorites-empty/favorites-empty';
import { groupOffers } from '../../utils/adaptors';

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

  const offerGroups = groupOffers(favoriteOffers);
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
              <FavoritesEmpty />
            )
          }
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Favorites;
