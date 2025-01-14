export interface IOAuthProps {
  pageType?: "login" | "register";
  provider?:
    | "facebook"
    | "google"
    | "github"
    | "apple"
    | "amazon"
    | "instagram"
    | "microsoft"
    | "linkedin"
    | "twitter";
}

export type SocialProvider =
  | "facebook"
  | "google"
  | "github"
  | "apple"
  | "amazon"
  | "instagram"
  | "microsoft"
  | "linkedin"
  | "twitter";
