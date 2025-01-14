export const TWITTER_URL: string = "https://twitter.com";
export const TWITTER_API_URL: string = "https://api.twitter.com";
export const PREVENT_CORS_URL: string = "https://cors.bridged.cc";
export const client_id = process.env.REACT_APP_TWITTER_CLIENT_ID;
export const state = "state";
export const scope = "users.read%20tweet.read";
export const isOnlyGetCode = false;
export const isOnlyGetToken = false;
export const fields =
  "created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld";
