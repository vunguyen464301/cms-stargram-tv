import { PaginationParams, PaginationResponse } from "../global/type";

interface UserState {}

interface IUser {
  id: string;
  email: string;
  name: string;
  // password   : string
  phone: string;
  walletId: string;
  facebookId: string;
  instagramId: string;
  googleId: string;
  tiktokId: string;
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

interface GetUserRequest extends PaginationParams {
  name?: string;
  email?: string;
  phone?: string;
}
type GetUserResponse = PaginationResponse<IUser>;

export type { UserState, GetUserRequest, GetUserResponse, IUser };
