import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';

const Router = lazy(() => import("./router.jsx"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={<div>Please Wait...</div>}>
        <Router />
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);
