import * as Sentry from "@sentry/react";
import posthog, { PostHogConfig } from "posthog-js";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

// Import constants
import {
  GOOGLE_ANALYTICS_CODE,
  POSTHOG_API_CONFIG,
  POSTHOG_API_KEY,
  SENTRY_CONFIG,
  SENTRY_DSN,
} from "./constants/constants";
import ErrorBoundary from "./ErrorBoundary";

// Initialize Google Analytics
ReactGA.initialize(GOOGLE_ANALYTICS_CODE);
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

// Initialize Sentry
Sentry.init({
  dsn: SENTRY_DSN,
  ...SENTRY_CONFIG,
});

posthog.init(POSTHOG_API_KEY, POSTHOG_API_CONFIG as Partial<PostHogConfig>);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// Measure performance
reportWebVitals();
