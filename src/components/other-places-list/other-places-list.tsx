import {OfferType} from '../../types.ts';
import OfferCard from '../offer-card/offer-card.tsx';

type Props = {
  list: OfferType[];
}

function OtherPlacesList({ list }: Props) {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          list.map((offer) => <OfferCard key={offer.id} offer={offer} cardType='near-places' />)
        }
      </div>
    </section>
  );
}

export default OtherPlacesList;
