import { createStore } from 'redux';
import { cards } from './reducer';

const store = createStore(
  cards,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
