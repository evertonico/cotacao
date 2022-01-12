import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import CurrencyProvider from './context/currencyContext';
import GlobalStyle from './styles';

ReactDOM.render(
  <React.StrictMode>
    <>
    <GlobalStyle />
    <CurrencyProvider>
      <App />
    </CurrencyProvider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
