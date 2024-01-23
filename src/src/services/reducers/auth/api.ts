import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import configApi from "../../config/configApi";
import { Response } from "../global/type";
import { LoginRequest, LoginResponse } from "./types";

const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${configApi.URL_APP}/v1/api/auth`,
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
    loginAuth: builder.mutation<Response<LoginResponse>, LoginRequest>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      transformResponse: (response: Response<LoginResponse>) => response,
      transformErrorResponse: (response) => response.data as Response<null>,
    }),
  }),
});

export const { useLoginAuthMutation } = authApi;
export default authApi;
