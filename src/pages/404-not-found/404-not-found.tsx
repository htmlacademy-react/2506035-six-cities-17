import { Link } from 'react-router-dom';
import { RoutePath} from '../../const.ts';
import './404-not-found.css';

function NotFoundPage() {
  return (
    <div className='root'>
      <h1 className='heading'>Страница не найдена</h1>
      <Link to={RoutePath.Main} className='link'>
        На главную
      </Link>
    </div>
  );
}

export default NotFoundPage;
