export interface UserProfile {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  accountStatus: "active" | "suspended" | "pending";
  createdAt: Date;
  updatedAt: Date;
}
