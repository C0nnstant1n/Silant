import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BACKAND_URL, USER_URL } from "../configs/urls.ts";
import { IUser } from "../configs/intarfaces.ts";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKAND_URL }),
  endpoints: (build) => ({
    getUser: build.query<IUser, string>({
      query: () => ({
        url: USER_URL,
        credentials: "include",
      }),
    }),
  }),
});
