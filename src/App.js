import Airquality from "./components/Airquality/Airquality";
import { Provider } from 'react-redux';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Airquality />
      </div>
    </Provider>
  );
}

export default App;
