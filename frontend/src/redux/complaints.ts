import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IComplaint, IResponse } from "../main/configs/intarfaces.ts";
import {
  BACKAND_URL,
  COMPLAINTS_URL,
  SETCOMPLAINT_URL,
} from "../main/configs/urls.ts";
import { csrftoken } from "../scripts/get_coockies.ts";

export const complaintsApi = createApi({
  reducerPath: "complaintsApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKAND_URL }),
  tagTypes: ["complaints"],
  endpoints: (build) => ({
    getComplaints: build.query<IResponse, string>({
      query: (search) => ({
        url: COMPLAINTS_URL + search,
        credentials: "include",
      }),
      providesTags: () => ["complaints"],
    }),
    getComplaint: build.query<IComplaint, string>({
      query: (arg: string) => ({
        url: COMPLAINTS_URL + arg,
        credentials: "include",
      }),
      providesTags: () => ["complaints"],
    }),
    createComplaints: build.mutation<IComplaint, IComplaint>({
      query: (complaint) => ({
        url: SETCOMPLAINT_URL,
        method: "POST",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
        body: complaint,
      }),
      invalidatesTags: ["complaints"],
    }),
    updateComplaints: build.mutation<IComplaint, IComplaint>({
      query: (complaint) => ({
        url: SETCOMPLAINT_URL + complaint.id,
        method: "PUT",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
        body: complaint,
      }),
      invalidatesTags: ["complaints"],
    }),
    deleteComplaints: build.mutation<IComplaint, string>({
      query: (complaint) => ({
        url: SETCOMPLAINT_URL + complaint,
        method: "DELETE",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
      }),
      invalidatesTags: ["complaints"],
    }),
  }),
});
