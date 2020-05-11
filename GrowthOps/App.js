/**
 * GrowthOps React Native App
 * https://github.com/sabirbasha/GrowthOps
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import Routes from './src/Config/Routes/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
