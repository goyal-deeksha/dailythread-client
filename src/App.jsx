/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";
import Router from "./Router";
import {Provider} from "react-redux";
import {store} from "./redux/store";
// import NunitoRegular from './assets/fonts/Nunito-Regular.ttf';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
