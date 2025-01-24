import { useState } from 'react';
import './sort-by-style.css';
import { SORT_BY, SORT_BY_OPTIONS } from '../../const';
import useAppSelector from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { getSortByLabel } from '../../adaptors';
import clsx from 'clsx';
import { selectSortOffersBy } from '../../store/selectors';
import { setSortOffersBy } from '../../store/reducer';

export function SortBy() {
  const [open, setOpen] = useState<boolean>(false);

  const sortBy = useAppSelector(selectSortOffersBy);

  const dispatch = useAppDispatch();

  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  const handleOptionClick = (key: SORT_BY) => {
    dispatch(setSortOffersBy(key));
    setOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleToggleOpen}>
        {getSortByLabel(sortBy)}
        <svg
          className={clsx('places__sorting-arrow', open && 'places__sorting-arrow--open')}
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom${open ? ' places__options--opened' : ''}`}>
        {
          SORT_BY_OPTIONS.map((option) => (
            <li
              key={option.sortBy}
              className={`places__option${option.sortBy === sortBy ? ' places__option--active' : ''}`}
              tabIndex={1}
              onClick={() => handleOptionClick(option.sortBy)}
            >
              {option.label}
            </li>
          ))
        }
      </ul>
    </form>
  );
}
