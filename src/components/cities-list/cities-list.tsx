import { cityLinks } from '../../const.ts';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import './cities-list-style.css';
import { useAppSelector } from '../../hooks/useAppSelector';
import { memo } from 'react';
import { changeCity } from '../../store/app-slice/app-slice';
import { selectCity } from '../../store/app-slice/selectors';

function CitiesList() {
  const cityId = useAppSelector(selectCity);

  const dispatch = useAppDispatch();

  const handleChangeCity = (id: string) => {
    dispatch(changeCity(id));
  };

  return (
    <ul className="locations__list tabs__list">
      {
        cityLinks.map((link) => (
          <li className="locations__item" key={link.id}>
            <button
              className={`locations__item-link tabs__item${link.id === cityId ? ' tabs__item--active' : ''}`}
              onClick={() => handleChangeCity(link.id)}
            >
              <span>{link.displayName}</span>
            </button>
          </li>
        ))
      }
    </ul>
  );
}

const MemoizedCitiesList = memo(CitiesList);
export { MemoizedCitiesList as CitiesList };
