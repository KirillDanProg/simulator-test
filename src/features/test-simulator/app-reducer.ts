import {Nullable} from "../../app/types";
import {AppAction} from "./ActionConstants";

export type TestType = "back" | "front"
type InitialStateType = {
    testDirectionTitleValue: Nullable<TestType>
}

const initialState = {
    testDirectionTitleValue: null
}



export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case AppAction.SET_TEST_TYPE:
            return {...state, testDirectionTitleValue: action.value}
        default:
            return state
    }
}

// actions type
type ActionsType = ReturnType<typeof setTestType>


export const setTestType = (value: TestType) => {
    return {
        type: AppAction.SET_TEST_TYPE,
        value
    } as const
}