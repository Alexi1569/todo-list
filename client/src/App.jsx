import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';

import Layout from './hoc/Layout/Layout';
import './App.sass';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
  );
}

export default App;
