import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeScreen from '~/screens/HomeScreen';

const INITIAL_STATE = {
  action: 'openMenu',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { action: 'openMenu' };
    case 'CLOSE_MENU':
      return { action: 'closeMenu' };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
}
