import OfferCard from '../offer-card/offer-card.tsx';
import { OfferType } from '../../api/types.ts';

type Props = {
  offers: OfferType[];
  onActiveOffer: (id: string | null) => void;
}

function OfferList({ offers, onActiveOffer }: Props) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <OfferCard key={offer.id} offer={offer} cardType='cities' onActiveOffer={onActiveOffer}/>)
      }
    </div>
  );
}

export default OfferList;
