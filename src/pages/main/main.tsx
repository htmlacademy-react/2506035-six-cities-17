import { LocationType, Point } from '../../types.ts';
import Header from '../../components/header/header.tsx';
import OfferList from '../../components/offer-list/offer-list.tsx';
import { useState } from 'react';
import CityMap from '../../components/city-map/city-map.tsx';
import { DEFAULT_CITY } from '../../const.ts';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import { filterOffersByCity, getCityName } from '../../adaptors.ts';
import useAppSelector from '../../hooks/useAppSelector.ts';

function Main() {
  const [activeOfferId, setActiveOfferId] = useState<string | null> (null);

  const cityId = useAppSelector((state) => state.city);
  const offers = useAppSelector((state) => state.offers);

  const handleActiveOffer = (id: string | null) => {
    setActiveOfferId(id);
  };

  const filteredOffers = filterOffersByCity(offers, cityId);

  const points: Point[] = filteredOffers.map((offer) => ({
    id: offer.id,
    location: offer.location,
  }));

  const city: LocationType = filteredOffers.length > 0 ? filteredOffers[0].city.location : DEFAULT_CITY;

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cityId={cityId}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{filteredOffers.length} places to stay in {getCityName(cityId)}</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0}>
                  Popular
                  <svg className="places__sorting-arrow" width={7} height={4}>
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                  <li className="places__option" tabIndex={0}>Price: low to high</li>
                  <li className="places__option" tabIndex={0}>Price: high to low</li>
                  <li className="places__option" tabIndex={0}>Top rated first</li>
                </ul>
              </form>
              <OfferList offers={filteredOffers} onActiveOffer={handleActiveOffer}/>
            </section>
            <div className="cities__right-section">
              <CityMap activeOfferId={activeOfferId} points={points} city={city} className='cities__map'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
