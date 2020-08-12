import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import * as serviceWorker from './serviceWorker';

library.add(fab, far, faSearch, faShoppingCart);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
