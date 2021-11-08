import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  NetworkInfo,
  WalletProvider,
  WalletStatus,
  getChainOptions,
} from '@terra-money/wallet-provider';
import reportWebVitals from './reportWebVitals';


getChainOptions().then((chainOptions) => {
  ReactDOM.render(
    <WalletProvider {...chainOptions}>
      <App />
    </WalletProvider>,
    document.getElementById('root'),
  );
});

reportWebVitals();
