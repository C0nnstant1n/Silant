import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {shmachineApi} from "./shmachine.ts";
import {machineApi} from "./machine.ts";
import {maintenanceApi} from "./maintenance.ts";

const rootReducer = combineReducers({
  [shmachineApi.reducerPath]:shmachineApi.reducer,
  [machineApi.reducerPath]:machineApi.reducer,
  [maintenanceApi.reducerPath]:maintenanceApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().
    concat(shmachineApi.middleware).
    concat(machineApi.middleware).
    concat(maintenanceApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
