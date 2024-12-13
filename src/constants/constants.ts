import * as Sentry from "@sentry/react";
// Google Analytics Tracking Code
export const GOOGLE_ANALYTICS_CODE = "G-J2Y18M9G9N";

// Sentry DSN
export const SENTRY_DSN =
  "https://66e259ceb88814c877c1a1459148408a@o4508454479986688.ingest.de.sentry.io/4508454487654480";

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

export const POSTHOG_API_KEY = "phc_eFeQpd7dcjjWbt32ZljvIBOSoXIrSb7E8eJtTrWVpiK";
export const POSTHOG_API_CONFIG = {
  api_host: "https://eu.i.posthog.com",
  person_profiles: "identified_only",
};
