import { Header } from '../../components/header/header.tsx';
import OfferList from '../../components/offer-list/offer-list.tsx';
import { useState } from 'react';
import CityMap from '../../components/city-map/city-map.tsx';
import CitiesList from '../../components/cities-list/cities-list.tsx';
import { getCityName } from '../../adaptors.ts';
import useAppSelector from '../../hooks/useAppSelector.ts';
import { SortBy } from '../../components/sort-by/sort-by.tsx';
import { useOffers } from '../../hooks/use-offers.ts';
import { selectCity } from '../../store/selectors.ts';

function Main() {
  const [activeOfferId, setActiveOfferId] = useState<string | null> (null);

  const cityId = useAppSelector(selectCity);

  const { offers, city, points } = useOffers();

  const handleActiveOffer = (id: string | null) => {
    setActiveOfferId(id);
  };

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
              <b className="places__found">{offers.length} places to stay in {getCityName(cityId)}</b>
              <SortBy />
              <OfferList offers={offers} onActiveOffer={handleActiveOffer}/>
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
