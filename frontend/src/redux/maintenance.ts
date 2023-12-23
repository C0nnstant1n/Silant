import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IMainentance, IResponse} from "../configs/intarfaces.ts";
import {BACKAND_URL, MAINTENANCE_URL} from "../configs/urls.ts";

export const maintenanceApi = createApi(({
    reducerPath: 'maintenanceApi',
    baseQuery: fetchBaseQuery({baseUrl: BACKAND_URL}),
    endpoints: (build) => ({
        getMaintenance: build.query<IResponse, string>({
            query: () => ({
                url: MAINTENANCE_URL,
                credentials: 'include',
            })
        }),
        getMaintenanceDetail: build.query<IMainentance, string>({
            query: (arg: string)=> ({
                url: MAINTENANCE_URL + arg,
                credentials: 'include',
            })
        })
    })
}))
