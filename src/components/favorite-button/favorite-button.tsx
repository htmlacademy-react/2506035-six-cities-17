import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeFavoriteAction } from '../../api/actions';
import { useAppSelector } from '../../hooks/useAppSelector';
import { selectAuthStatus } from '../../store/user-slice/selectors';
import { AuthStatus } from '../../api/const';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../const';

type Props = {
  offerId: string;
  isFavorite: boolean;
  buttonClass: string;
  width: string;
  height: string;
}

function FavoriteButton({ offerId, isFavorite, buttonClass, width, height }: Props) {
  const authStatus = useAppSelector(selectAuthStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const favoriteClass = isFavorite ? `${buttonClass}__bookmark-button--active` : '';

  const handleAddFavorite = () => {
    if (authStatus === AuthStatus.Auth) {
      dispatch(changeFavoriteAction({
        offerId,
        status: isFavorite ? 0 : 1,
      }));
    } else {
      navigate(RoutePath.Login);
    }
  };

  return (
    <button
      className={`${buttonClass}__bookmark-button button ${favoriteClass}`}
      type="button"
      onClick={handleAddFavorite}
    >
      <svg className={`${buttonClass}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}


export { FavoriteButton };
