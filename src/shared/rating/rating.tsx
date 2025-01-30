import { Fragment } from 'react';
import { ratingTitles } from '../../const.ts';

type Props = {
  disabled?: boolean;
  value: number;
  onStarClick: (value: number) => void;
}

function Rating({ disabled, value, onStarClick }: Props) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        Array.from(Array(5).keys()).reverse().map((index) => {
          const starIndex = index + 1;
          return (
            <Fragment key={starIndex}>
              <input
                className="form__rating-input visually-hidden"
                value={starIndex}
                checked={value === starIndex}
                id={`${starIndex}-stars`}
                disabled={disabled}
                type="radio"
                onChange={() => onStarClick(starIndex)}
              />
              <label
                htmlFor={`${starIndex}-stars`}
                className="reviews__rating-label form__rating-label"
                title={ratingTitles[starIndex]}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          );
        })
      }
    </div>
  );
}

export { Rating };
