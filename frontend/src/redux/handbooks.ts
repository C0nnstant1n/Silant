import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    BACKAND_URL,
    ENGINE_URL,
    EQUIPMENT_URL,
    HANDBOOKS_URL, SERVICECOMPANY,
    TYPEOFMAINTENANCE
} from "../configs/urls.ts";
import {IHandbook} from "../configs/intarfaces.ts";

export const handbooksApi = createApi({
    reducerPath: 'handbooksApi',
    baseQuery: fetchBaseQuery({baseUrl: BACKAND_URL+HANDBOOKS_URL,}),
    endpoints: (build) => ({
        getEquipment: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: EQUIPMENT_URL + url_arg + '/',
                credentials: 'include',
            })
        }),
        getEngine: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: ENGINE_URL + url_arg,
                credentials: 'include',
            })
        }),
        getType: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: TYPEOFMAINTENANCE + url_arg + '/',
                credentials: 'include',
            })
        }),
        getOrganisation: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: SERVICECOMPANY + url_arg + '/',
                credentials: 'include',
            })
        })
    })
})
