import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IComplaint, IResponse} from "../configs/intarfaces.ts";
import {BACKAND_URL, COMPLAINTS_URL} from "../configs/urls.ts";

export const complaintsApi = createApi(({
    reducerPath: 'complaintsApi',
    baseQuery: fetchBaseQuery({baseUrl: BACKAND_URL}),
    endpoints: (build) => ({
        getComplaints: build.query<IResponse, string>({
            query: () => ({
                url: COMPLAINTS_URL,
                credentials: 'include',
            })
        }),
        getComplaint: build.query<IComplaint, string>({
            query: (arg: string)=> ({
                url: COMPLAINTS_URL + arg,
                    credentials: 'include',
            })
        })
    })
}))