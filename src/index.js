import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './App';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import 'modern-normalize/modern-normalize.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter
      // base name обязательно дать
      // basename="/goit-react-hw-08-phonebook/"
      >
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
