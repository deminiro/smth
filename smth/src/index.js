import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header';
import Main from './components/main';

const App = () => (
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
