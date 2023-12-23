import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {shmachineApi} from "./shmachine.ts";
import {machineApi} from "./machine.ts";
import {maintenanceApi} from "./maintenance.ts";
import {complaintsApi} from "./complaints.ts";
import {handbooksApi} from "./handbooks.ts";
import {userApi} from "./user.ts";

const rootReducer = combineReducers({
  [shmachineApi.reducerPath]:shmachineApi.reducer,
  [machineApi.reducerPath]:machineApi.reducer,
  [maintenanceApi.reducerPath]:maintenanceApi.reducer,
  [complaintsApi.reducerPath]:complaintsApi.reducer,
  [handbooksApi.reducerPath]:handbooksApi.reducer,
  [userApi.reducerPath]:userApi.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().
    concat(shmachineApi.middleware).
    concat(machineApi.middleware).
    concat(maintenanceApi.middleware).
    concat(complaintsApi.middleware).
    concat(handbooksApi.middleware).
    concat(userApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
