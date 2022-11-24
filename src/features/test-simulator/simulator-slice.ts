import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type SliceType = {
    type: "back" | "front" | null
}
const slice = createSlice({
    name: "test",
    initialState: {type: null} as SliceType,
    reducers: {
        setTestType(state, action) {
            state.type = action.payload.type
        }
    }
})


export const {setTestType} = slice.actions
export const simulatorSlice = slice.reducer
