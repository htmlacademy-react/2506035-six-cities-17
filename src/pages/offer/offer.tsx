import { Header } from '../../components/header/header';
import ReviewsList from '../../components/reviews-list/review-list';
import { CityMap } from '../../components/city-map/city-map';
import { Point } from '../../types';
import OtherPlacesList from '../../components/other-places-list/other-places-list';
import useAppSelector from '../../hooks/useAppSelector';
import { selectIsLoadingOffer, selectIsLoadingOfferComments, selectIsLoadingOffersNearby, selectOffer, selectOfferComments, selectOffersNearby } from '../../store/offer-slice/selectors';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { fetchOfferAction, fetchOfferCommentsAction, fetchOffersNearbyAction } from '../../api/actions';
import { Navigate, useParams } from 'react-router-dom';
import { Spinner } from '../../components/spinner/spinner.tsx';
import { AuthStatus } from '../../api/const.ts';
import { getOfferCategory, mapComments, isOfferFavorite } from '../../adaptors.ts';
import { RoutePath } from '../../const.ts';
import { selectAuthStatus, selectIsLoadingUser } from '../../store/user-slice/selectors';
import { selectFavoriteOffers, selectIsLoadingFavorites } from '../../store/favorites-slice/selectors';
import { OfferDetailsType, OfferType } from '../../api/types';
import { FavoriteButton } from '../../components/favorite-button/favorite-button';

function Offer() {
  const { id: offerId } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction({ offerId }));
      dispatch(fetchOffersNearbyAction({ offerId }));
      dispatch(fetchOfferCommentsAction({ offerId }));
    }
  }, [dispatch, offerId]);

  const offer = useAppSelector(selectOffer);
  const isLoadingOffer = useAppSelector(selectIsLoadingOffer);
  const offersNearby = useAppSelector(selectOffersNearby);
  const isLoadingOffersNearby = useAppSelector(selectIsLoadingOffersNearby);
  const offerComments = useAppSelector(selectOfferComments);
  const isLoadingOfferComments = useAppSelector(selectIsLoadingOfferComments);
  const authStatus = useAppSelector(selectAuthStatus);
  const isLoadingUser = useAppSelector(selectIsLoadingUser);
  const isLoadingFavorites = useAppSelector(selectIsLoadingFavorites);
  const favoriteOffers = useAppSelector(selectFavoriteOffers);

  const loading = isLoadingOffer || isLoadingOffersNearby || isLoadingOfferComments || isLoadingUser || isLoadingFavorites;

  const handleAddComment = () => {
    if (offerId) {
      dispatch(fetchOfferCommentsAction({ offerId }));
    }
  };

  if (loading || authStatus === AuthStatus.UNKNOWN) {
    return <Spinner />;
  }

  if (!offer) {
    return <Navigate to={RoutePath.NOT_FOUND} />;
  }

  const offerWithFavorite: OfferDetailsType = {
    ...offer,
    isFavorite: isOfferFavorite(favoriteOffers, offer.id),
  };

  const offersNearbyWithFavorites: OfferType[] = offersNearby.map((nearby) => ({
    ...nearby,
    isFavorite: isOfferFavorite(favoriteOffers, nearby.id),
  }));

  const POINTS_NEARBY = offersNearbyWithFavorites.map((nearby) => ({
    id: nearby.id,
    location: nearby.location,
  }));

  const POINTS: Point[] = [{
    id: offerWithFavorite.id,
    location: offerWithFavorite.location,
  }, ...POINTS_NEARBY];

  const commentsFiltered = mapComments(offerComments);

  const starsWidth = Math.round(offerWithFavorite.rating / 5 * 100);

  const {
    id,
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
    city,
  } = offerWithFavorite;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img className="offer__image" src={image} alt="Photo studio"/>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {
                isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )
              }
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <FavoriteButton
                  offerId={id}
                  isFavorite={isFavorite}
                  buttonClass='offer'
                  width='31'
                  height='33'
                />
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${starsWidth}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {getOfferCategory(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    goods.map((item) => (
                      <li className="offer__inside-item" key={item}>
                        {item}
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  {
                    host.isPro && (
                      <span className="offer__user-status">
                        Pro
                      </span>
                    )
                  }
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              {
                commentsFiltered.length ? (
                  <ReviewsList list={commentsFiltered} onAddComment={handleAddComment}/>
                ) : null
              }
            </div>
          </div>
          <CityMap city={city.location} points={POINTS} activeOfferId={id} className='offer__map map'/>
        </section>
        <div className="container">
          {
            offersNearbyWithFavorites.length ? (
              <OtherPlacesList list={offersNearbyWithFavorites}/>
            ) : null
          }
        </div>
      </main>
    </div>
  );
}

export default Offer;
