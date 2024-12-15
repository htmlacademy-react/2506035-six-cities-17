import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.tsx';
import { BrowserRouter } from 'react-router-dom';
import { OFFERS_MOCK } from './mocks/offers.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App offers={OFFERS_MOCK}/>
    </BrowserRouter>
  </React.StrictMode>
);
