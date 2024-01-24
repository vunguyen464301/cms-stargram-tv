import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import configApi from "../../config/configApi";
import { GetUserRequest, GetUserResponse } from "./types";
import { Response } from "../global/type";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${configApi.URL_APP}/v1/api/user`,
    prepareHeaders: (headers, { getState }) => {
      const accessToken = (getState() as RootState).authReducer.accessToken;

      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  // tagTypes: ['Post'],
  endpoints: (builder) => ({
    getUsers: builder.query<Response<GetUserResponse>, GetUserRequest>({
      query: (params) => ({
        url: "",
        method: "GET",
        params,
      }),
      transformResponse: (response: Response<GetUserResponse>) => response,
      transformErrorResponse: (response) => response.data as Response<null>,
    }),
  }),
});

export const { useLazyGetUsersQuery, useGetUsersQuery } = userApi;
export default userApi;
