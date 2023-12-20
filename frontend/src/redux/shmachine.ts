import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {BACKAND_URL, SHARED_MACHINE_URL} from "../configs/urls.ts";
import {IResponse} from "../configs/intarfaces.ts";
// import {sessionid, csrftoken} from "../scripts/get_coockies.ts";

export const shmachineApi = createApi({
    reducerPath: "shmachineApi",
    baseQuery: fetchBaseQuery({baseUrl: BACKAND_URL,

    }),
    endpoints: (build) => ({
        getMachine: build.query<IResponse, string|null>({
            query: (id) => ({
                url: SHARED_MACHINE_URL+`?machine_serial_number=${id}`,
                credentials: "include",
            })
        })
    })
})

// "Set-Coocie": `sessionid=${sessionid};  csrftoken=${csrftoken}`