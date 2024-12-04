import Main from '../../pages/main/main.tsx';
import { Settings } from '../../const.ts';

function App(): JSX.Element {
  return (
    <Main
      placeCount={Settings.PlaceCount}
      allPlace={Settings.AllPlace}
    />
  );
}

export default App;
