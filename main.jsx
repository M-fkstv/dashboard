import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import './index.css';
import App from './src/components/App/App';
import { router } from './src/components/router';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);

