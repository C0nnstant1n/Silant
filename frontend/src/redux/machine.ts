import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BACKAND_URL, MACHINE_URL} from "../configs/urls.ts";
import {IResponse} from "../configs/intarfaces.ts";

export const machineApi = createApi({
    reducerPath: "machineApi",
    baseQuery: fetchBaseQuery({baseUrl: BACKAND_URL,}),
    endpoints: (build) => ({
        getMachine: build.query<IResponse, string>({
            query: () => ({
                url: MACHINE_URL,
                credentials: "include",
            })
        })
    })
})
