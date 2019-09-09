import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import allReducers from './redux/reducers';
import Header from './components/header/index';
import Main from './components/main/index';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(),
);

const App = () => (
  <BrowserRouter>
    <Header />
    <Main store={store} />
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
