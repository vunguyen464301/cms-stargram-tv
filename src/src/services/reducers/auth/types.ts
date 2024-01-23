import { Role } from "../../../utils/constants.ts";

interface AuthState {
  accessToken?: string;
}

interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserInfo;
}

interface UserInfo {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
}

interface UserRole {
  id: string;
  userId: string;
  role: Role;

  createdAt: Date;
  updatedAt: Date;
}

export type { AuthState, LoginRequest, LoginResponse };
