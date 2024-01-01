import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IMaintenance, IResponse } from "../main/configs/intarfaces.ts";
import {
  BACKAND_URL,
  MAINTENANCE_URL,
  SETMAINTENANCE_URL,
} from "../main/configs/urls.ts";
import { csrftoken } from "../scripts/get_coockies.ts";

export const maintenanceApi = createApi({
  reducerPath: "maintenanceApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKAND_URL }),
  tagTypes: ["maintenance"],
  endpoints: (build) => ({
    getMaintenance: build.query<IResponse, string>({
      query: (search) => ({
        url: MAINTENANCE_URL + search,
        credentials: "include",
      }),
      providesTags: () => ["maintenance"],
    }),
    getMaintenanceDetail: build.query<IMaintenance, string>({
      query: (arg: string) => ({
        url: MAINTENANCE_URL + arg,
        credentials: "include",
      }),
    }),
    deleteMaintenance: build.mutation<IMaintenance, string>({
      query: (maintenance) => ({
        url: SETMAINTENANCE_URL + maintenance,
        method: "DELETE",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
      }),
      invalidatesTags: ["maintenance"],
    }),
    createMaintenance: build.mutation<IMaintenance, IMaintenance>({
      query: (maintenance) => ({
        url: SETMAINTENANCE_URL,
        method: "POST",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
        body: maintenance,
      }),
      invalidatesTags: ["maintenance"],
    }),
    updateMaintenance: build.mutation<IMaintenance, IMaintenance>({
      query: (maintenance) => ({
        url: SETMAINTENANCE_URL + maintenance.id,
        method: "PUT",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
        body: maintenance,
      }),
      invalidatesTags: ["maintenance"],
    }),
  }),
});
