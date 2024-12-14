export type RoleType =
  | "admin"
  | "developer"
  | "tester"
  | "senior"
  | "junior"
  | "user";

export interface RoleLabelProps {
  children: React.ReactNode;
  type: RoleType;
}
