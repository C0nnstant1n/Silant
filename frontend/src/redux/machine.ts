import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BACKAND_URL, MACHINE_URL} from "../configs/urls.ts";
import {IMachine, IResponse} from "../configs/intarfaces.ts";

export const machineApi = createApi({
    reducerPath: "machineApi",
    baseQuery: fetchBaseQuery({baseUrl: BACKAND_URL,}),
    endpoints: (build) => ({
        getMachines: build.query<IResponse, string>({
            query: () => ({
                url: MACHINE_URL,
                credentials: "include",
            })
        }),
        getMachine: build.query<IMachine, string>({
            query: (arg: string)=> ({
                url: MACHINE_URL + arg,
                credentials: 'include',
            })
        })
    })
})
