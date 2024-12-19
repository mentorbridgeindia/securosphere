import * as Sentry from "@sentry/react";
// Google Analytics Tracking Code
export const GOOGLE_ANALYTICS_CODE = "G-J2Y18M9G9N";

// Sentry DSN
export const SENTRY_DSN =
  "https://553cc39938dcdc71a390d50490bdd693@o4508437918842880.ingest.de.sentry.io/4508438503161936";

// Sentry Integrations and Configurations
export const SENTRY_CONFIG = {
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1, // Sample rate at 10%
  replaysOnErrorSampleRate: 1.0, // Sample 100% of error sessions
};
