import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type SliceType = {
    type: "back" | "front" | null
}
const slice = createSlice({
    name: "test",
    initialState: {type: null} as SliceType,
    reducers: {
        setTestType(state, action: PayloadAction<{value: any}>) {
            state.type = action.payload.value
        }
    }
})


export const {setTestType} = slice.actions
export const simulatorSlice = slice.reducer
