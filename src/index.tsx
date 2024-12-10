import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from "react-ga4";
import reportWebVitals from './reportWebVitals';
import * as Sentry from "@sentry/react";

// Import constants
import { GOOGLE_ANALYTICS_CODE, SENTRY_DSN, SENTRY_CONFIG } from './constants/config';

// Initialize Google Analytics
ReactGA.initialize(GOOGLE_ANALYTICS_CODE);
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

// Initialize Sentry
Sentry.init({
  dsn: SENTRY_DSN,
  ...SENTRY_CONFIG,
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
