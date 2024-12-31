export type SocialProvider =
  | "email"
  | "google"
  | "facebook"
  | "apple"
  | "microsoft"
  | "linkedin"
  | "github"
  | "twitter";

export interface SignUpConfigState {
  appName: string;
  socialProviders: SocialProvider[];
}
