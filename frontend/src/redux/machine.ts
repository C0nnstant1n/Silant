import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  BACKAND_URL,
  CREATE_MACHINE_URL,
  MACHINE_URL,
} from "../main/configs/urls.ts";
import { IMachine, IResponse } from "../main/configs/intarfaces.ts";
import { csrftoken } from "../scripts/get_coockies.ts";

export const machineApi = createApi({
  reducerPath: "machineApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKAND_URL }),
  tagTypes: ["machine"],
  endpoints: (build) => ({
    getMachines: build.query<IResponse, string>({
      query: (search) => ({
        url: MACHINE_URL + search,
        credentials: "include",
      }),
      providesTags: () => ["machine"],
    }),
    getMachine: build.query<IMachine, number>({
      query: (arg) => ({
        url: MACHINE_URL + arg,
        credentials: "include",
      }),
    }),
    createMachine: build.mutation<IMachine, IMachine>({
      query: (machine: IMachine) => ({
        url: CREATE_MACHINE_URL,
        method: "POST",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
        body: machine,
      }),
      invalidatesTags: ["machine"],
    }),
    deleteMachine: build.mutation<IMachine, string>({
      query: (arg) => ({
        url: MACHINE_URL + arg,
        method: "DELETE",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
      }),
      invalidatesTags: ["machine"],
    }),
    updateMachine: build.mutation<IMachine, IMachine>({
      query: (machine) => ({
        url: CREATE_MACHINE_URL + machine.id,
        method: "PUT",
        headers: {
          "X-CSRFToken": csrftoken as string,
        },
        credentials: "include",
        body: machine,
      }),
      invalidatesTags: ["machine"],
    }),
  }),
});
