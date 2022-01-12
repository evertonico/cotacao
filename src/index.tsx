import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CurrencyProvider from './context/currencyContext';

ReactDOM.render(
  <React.StrictMode>
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
