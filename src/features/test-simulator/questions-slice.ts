import { createSlice, PayloadAction} from "@reduxjs/toolkit";

type PossibleAnswersType = {[key: string] : string}

export type QuestionType = {
    id: number
    body: string
    possibleAnswers: PossibleAnswersType
    rightAnswer: string
    status: StatusType
}
export type StatusType = "right" | "wrong" | "current" | "idle"

const slice = createSlice({
    name: "questions",
    initialState: {questions: [] as QuestionType[]},
    reducers: {
        setQuestions(state, action: PayloadAction<{ value: QuestionType[]}>) {
            state.questions = [...action.payload.value]
        }
    }
})


export const {setQuestions} = slice.actions
export const questionsSlice = slice.reducer


