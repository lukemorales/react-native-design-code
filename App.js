import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import AppNavigator from '~/navigator/AppNavigator';

const client = new ApolloClient({
  uri: 'https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx/',
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
  },
});

const INITIAL_STATE = {
  action: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { action: 'openMenu' };
    case 'CLOSE_MENU':
      return { action: 'closeMenu' };
    case 'OPEN_CARD':
      return { action: 'openCard' };
    case 'CLOSE_CARD':
      return { action: 'closeCard' };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </ApolloProvider>
  );
}
