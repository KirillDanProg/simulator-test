import {configureStore} from "@reduxjs/toolkit";
import {simulatorSlice} from "../features/test-simulator/simulator-slice";

export const store = configureStore({
    reducer: {
        test: simulatorSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;