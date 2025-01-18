export interface ISocialLoginButtonsProps {
  isGoogleAvailable?: boolean;
  isAppleAvailable?: boolean;
  isAmazonAvailable?: boolean;
  isFacebookAvailable?: boolean;
  isMicrosoftAvailable?: boolean;
  isInstagramAvailable?: boolean;
  isLinkedinAvailable?: boolean;
  isGithubAvailable?: boolean;
  isTwitterAvailable?: boolean;
}

export interface ISocialLoginProps extends ISocialLoginButtonsProps {
  onSuccess: (data: any) => void;
  onError: (error: any) => void;
  provider: SocialProvider;
}

export type SocialProvider =
  | "facebook"
  | "google"
  | "apple"
  | "amazon"
  | "instagram"
  | "microsoft"
  | "linkedin"
  | "github"
  | "twitter";

export declare type objectType = {
  [key: string]: any;
};
export declare type IResolveParams = {
  provider: string;
  data?: objectType;
};

export interface IOauthProps {
  redirect_uri: string;
  onLoginStart?: () => void;
  onReject: (reject: string | objectType) => void;
  onResolve: ({ provider, data }: IResolveParams) => void;
}
