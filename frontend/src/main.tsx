import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.jsx'

import App from './App';          // no need to write “.tsx”
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement  // type‑assertion instead of “!”
);

root.render(
 
  <BrowserRouter>

    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
 
);
