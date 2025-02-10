export interface IProfileEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  role: IProfileRole;
  status: IProfileStatus;
}

export type IProfileRole = "ROLE_ADMIN" | "ROLE_USER";

export type IProfileStatus = "active" | "inactive";
