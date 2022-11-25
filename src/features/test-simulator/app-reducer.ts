type InitialStateType = typeof initialState
export type TestType = "back" | "front"
const initialState = {
    testType: null as TestType | null
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "APP-REDUCER/SET-TEST-TYPE":
            return {...state, testType: action.value}
        default:
            return state
    }
}

// actions type
type ActionsType = ReturnType<typeof setTestType>

export const setTestType = (value: TestType) => {
    return {
        type: "APP-REDUCER/SET-TEST-TYPE",
        value
    } as const
}