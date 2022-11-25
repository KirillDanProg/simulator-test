export type QuestionType = {
    id: number
    body: string
    possibleAnswers: PossibleAnswersType
    rightAnswer: string
    status: QuestionStatusType
}
export type QuestionStatusType = "right" | "wrong" | "current" | "idle"
type InitialStateType = typeof initialStateType
type PossibleAnswersType = { [key: string]: string }

const initialStateType = {
    questions: [] as QuestionType[],
}

export const questionsReducer = (state: InitialStateType = initialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "CHANGE-QUESTION-STATUS/QUESTION-REDUCER":
            return {
                ...state, questions: state.questions.map(question => question.id === action.payload.questionId
                    ? {...question, status: action.payload.status}
                    : question
                )
            }
        case "FETCH-QUESTIONS/QUESTION-REDUCER":
            return {...state, questions: [...action.payload.questions] }

        default:
            return state
    }
}
export const changeQuestionStatus = (questionId: number, status: QuestionStatusType) => {
    return {
        type: "CHANGE-QUESTION-STATUS/QUESTION-REDUCER",
        payload: {
            questionId,
            status
        }
    } as const
}

export const fetchQuestions = (questions: QuestionType[]) => {
    return {
        type: "FETCH-QUESTIONS/QUESTION-REDUCER",
        payload: {
            questions
        }
    } as const
}

type ActionsType = ReturnType<typeof changeQuestionStatus>
    | ReturnType<typeof fetchQuestions>