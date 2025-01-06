export interface IQueryConfigObject {
  enabled?: boolean;
}

export interface IQueryConfig {
  queryConfig?: IQueryConfigObject;
}

export type MutationResponse = any;

export interface IMutationParams {
  onSuccess?: (response: MutationResponse) => void;
  onError?: (error: Error) => void;
}
