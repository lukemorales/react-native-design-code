import { createStore } from 'redux';

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

export default store;
