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

export const POSTHOG_API_KEY =
  "phc_eFeQpd7dcjjWbt32ZljvIBOSoXIrSb7E8eJtTrWVpiK";
export const POSTHOG_API_CONFIG = {
  api_host: "https://eu.i.posthog.com",
  person_profiles: "identified_only",
};

// OAuth and API credentials for multiple providers
export const PROVIDER_FACEBOOK_APP_ID =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_ID || "";
export const PROVIDER_FACEBOOK_APP_SECRET =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_SECRET || "";

export const PROVIDER_GOOGLE_CLIENT_ID =
  process.env.REACT_APP_PROVIDER_GOOGLE_CLIENT_ID || "";
export const PROVIDER_GOOGLE_CLIENT_SECRET =
  process.env.REACT_APP_PROVIDER_GOOGLE_CLIENT_SECRET || "";

export const PROVIDER_APPLE_APP_ID =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_ID || "";
export const PROVIDER_APPLE_APP_SECRET =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_SECRET || "";

export const PROVIDER_INSTAGRAM_APP_ID =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_ID || "";
export const PROVIDER_INSTAGRAM_APP_SECRET =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_SECRET || "";

export const PROVIDER_MICROSOFT_APP_ID =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_ID || "";
export const PROVIDER_MICROSOFT_APP_SECRET =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_SECRET || "";

export const PROVIDER_TWITTER_API_KEY =
  process.env.REACT_APP_PROVIDER_TWITTER_API_KEY || "";
export const PROVIDER_TWITTER_API_SECRET =
  process.env.REACT_APP_PROVIDER_TWITTER_API_SECRET || "";

export const PROVIDER_GITHUB_CLIENT_ID =
  process.env.REACT_APP_PROVIDER_GITHUB_CLIENT_ID || "";
export const PROVIDER_GITHUB_CLIENT_SECRET =
  process.env.REACT_APP_PROVIDER_GITHUB_CLIENT_SECRET || "";

export const PROVIDER_GITLAB_APP_ID =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_ID || "";
export const PROVIDER_GITLAB_APP_SECRET =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_SECRET || "";

export const PROVIDER_LINKEDIN_APP_ID =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_ID || "";
export const PROVIDER_LINKEDIN_APP_SECRET =
  process.env.REACT_APP_PROVIDER_FACEBOOK_APP_SECRET || "";

// Default avatar image URL
export const DEFAULT_AVATAR_URL =
  process.env.REACT_APP_DEFAULT_AVATAR_URL || "";

// API URLs or endpoints
export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "https://your-api-base-url.com";
export const API_AUTH_URL =
  process.env.REACT_APP_API_AUTH_URL || "https://your-api-base-url.com/auth";
export const API_PROFILE_URL =
  process.env.REACT_APP_API_PROFILE_URL ||
  "https://your-api-base-url.com/profile";

// Frontend base URL (if needed for routing or linking)
export const FRONTEND_BASE_URL =
  process.env.REACT_APP_FRONTEND_BASE_URL || "https://your-frontend-url.com";
