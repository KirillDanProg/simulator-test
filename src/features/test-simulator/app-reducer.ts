export type TestType = "back" | "front"
type InitialStateType = typeof initialState

const initialState = {
    testType: null as TestType | null
}

const SET_TEST_TYPE = "APP-REDUCER/SET-TEST-TYPE"

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_TEST_TYPE:
            return {...state, testType: action.value}
        default:
            return state
    }
}

// actions type
type ActionsType = ReturnType<typeof setTestType>


export const setTestType = (value: TestType) => {
    return {
        type: SET_TEST_TYPE,
        value
    } as const
}