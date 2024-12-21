import { CardType, OfferType } from '../../types';
import { Link } from 'react-router-dom';

type Props = {
  offer: OfferType;
  cardType: CardType;
  onActiveOffer?: (id: string | null) => void;
}

function OfferCard({ offer, cardType, onActiveOffer = () => {} }: Props) {
  const { rating, previewImage, price, isPremium, title, type} = offer;

  const placeRating = rating || 0;
  const linkTo = `/offer/${offer.id}`;

  return (
    <article className={`${cardType}__card place-card`} onMouseEnter={() => onActiveOffer(offer.id)} onMouseLeave={() => onActiveOffer(null)}>
      {
        isPremium && (
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        )
      }
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={linkTo}>
          <img className="place-card__image" src={previewImage} width={cardType === 'favorites' ? '150' : '260'} height={cardType === 'favorites' ? '110' : '200'} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${placeRating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={linkTo}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;
