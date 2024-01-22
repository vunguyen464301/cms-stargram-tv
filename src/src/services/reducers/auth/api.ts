import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../../store";
import configApi from "../../config/configApi";

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
  endpoints: (builder) => ({}),
});

// export const {} = authApi;
export default authApi;
