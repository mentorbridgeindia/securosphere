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
export const POSTHOG_API_KEY = "YOUR_POSTHOG_API_KEY";
export const POSTHOG_API_CONFIG = {
  api_host: "https://app.posthog.com", // Example API host, you can modify this as per your needs
  // Other PostHog config options
};
// constants.ts
export const REDIRECT_URI =
  "https://plenty-planets-beam-42-118-51-2.loca.lt/account/login";
// or for local development
// export const REDIRECT_URI = 'http://localhost:3000/account/login';

// constants.ts
export const SOCIAL_LOGIN_IDS = {
  FACEBOOK_APP_ID: "your-facebook-app-id",
  GOOGLE_CLIENT_ID: "your-google-client-id",
  APPLE_CLIENT_ID: "your-apple-client-id",
  AMAZON_CLIENT_ID: "your-amazon-client-id",
  INSTAGRAM_APP_ID: "your-instagram-app-id",
  INSTAGRAM_APP_SECRET: "your-instagram-app-secret",
  MICROSOFT_APP_ID: "your-microsoft-app-id",
  LINKEDIN_APP_ID: "your-linkedin-app-id",
  LINKEDIN_APP_SECRET: "your-linkedin-app-secret",
  GITHUB_APP_ID: "your-github-app-id",
  GITHUB_APP_SECRET: "your-github-app-secret", // Add this line
  TWITTER_V2_APP_KEY: "your-twitter-v2-app-key",
};
