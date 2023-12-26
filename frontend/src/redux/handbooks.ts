import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    BACKAND_URL, CLIENT_URL, DRIVE_AXLE_URL,
    ENGINE_URL,
    HANDBOOKS_URL, MACHINE_MODEL_URL, RECOVERYMETHOD, SERVICECOMPANY, STEERING_AXLE, TRANSMISSION_URL,
    TYPEOFMAINTENANCE
} from "../configs/urls.ts";
import {IHandbook, IResponse} from "../configs/intarfaces.ts";

export const handbooksApi = createApi({
    reducerPath: 'handbooksApi',
    baseQuery: fetchBaseQuery({baseUrl: BACKAND_URL+HANDBOOKS_URL,}),
    endpoints: (build) => ({
        getMachineModel: build.query<IHandbook, number>({
            query: (url_arg) => ({
                url: MACHINE_MODEL_URL + url_arg + '/',
                credentials: 'include',
            })
        }),
        getAllMachineModel: build.query<IResponse, string>({
            query: () => ({
                url: MACHINE_MODEL_URL,
                credentials: 'include',
            })
        }),
        getEngine: build.query<IHandbook, number>({
            query: (url_arg) => ({
                url: ENGINE_URL + url_arg  + '/',
                credentials: 'include',
            })
        }),
        getAllEngine: build.query<IResponse, string>({
            query: () => ({
                url: ENGINE_URL,
                credentials: 'include',
            })
        }),
        getTransmission: build.query<IHandbook, number>({
            query: (url_arg) => ({
                url: TRANSMISSION_URL + url_arg  + '/',
                credentials: 'include',
            })
        }),
        getAllTransmission: build.query<IResponse, string>({
            query: () => ({
                url: TRANSMISSION_URL,
                credentials: 'include',
            })
        }),
        getDriveAxle: build.query<IHandbook, number>({
            query: (url_arg) => ({
                url: DRIVE_AXLE_URL + url_arg  + '/',
                credentials: 'include',
            })
        }),
        getAllDriveAxle: build.query<IResponse, string>({
            query: () => ({
                url: DRIVE_AXLE_URL,
                credentials: 'include',
            })
        }),
        getSteeringAxle: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: STEERING_AXLE + url_arg  + '/',
                credentials: 'include',
            })
        }),
        getAllSteeringAxle: build.query<IResponse, string>({
            query: () => ({
                url: STEERING_AXLE,
                credentials: 'include',
            })
        }),
        getMaintenance: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: TYPEOFMAINTENANCE + url_arg + '/',
                credentials: 'include',
            })
        }),
        getAllMaintenance: build.query<IResponse, string>({
            query: () => ({
                url: TYPEOFMAINTENANCE,
                credentials: 'include',
            })
        }),
        getRecoveryMethod: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: RECOVERYMETHOD + url_arg  + '/',
                credentials: 'include',
            })
        }),
        getAllRecoveryMethod: build.query<IResponse, string>({
            query: () => ({
                url: RECOVERYMETHOD,
                credentials: 'include',
            })
        }),
        getOrganisation: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: SERVICECOMPANY + url_arg + '/',
                credentials: 'include',
            })
        }),
        getAllOrganization: build.query<IResponse, string>({
            query: () => ({
                url: SERVICECOMPANY,
                credentials: 'include',
            })
        }),
        getClient: build.query<IHandbook, string>({
            query: (url_arg) => ({
                url: CLIENT_URL + url_arg  + '/',
                credentials: 'include',
            })
        }),
        getAllClients: build.query<IResponse, string>({
            query: () => ({
                url: CLIENT_URL,
                credentials: 'include',
            })
        }),
    })
})
