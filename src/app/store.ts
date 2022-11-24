import {configureStore} from "@reduxjs/toolkit";
import {simulatorSlice} from "../features/test-simulator/simulator-slice";
import {questionsSlice} from "../features/test-simulator/questions-slice";

export const store = configureStore({
    reducer: {
        test: simulatorSlice,
        questions: questionsSlice
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;