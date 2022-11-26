import {Nullable} from "../../app/types";

export type QuestionType = {
    id: number
    body: string
    possibleAnswers: PossibleAnswersType
    rightAnswer: string
    status: QuestionStatusType
    chosen?: Nullable<number>
}
export type QuestionStatusType = "right" | "wrong" | "current" | "idle"

type InitialStateType = typeof initialStateType
type PossibleAnswersType = { [key: string]: string }

const initialStateType = {
    questions: [] as QuestionType[],
}

const CHANGE_QUESTION_STATUS = "CHANGE-QUESTION-STATUS/QUESTION-REDUCER"
const FETCH_QUESTIONS = "FETCH-QUESTIONS/QUESTION-REDUCER"
const SAVE_CHOSEN_ANSWER = "SAVE-CHOSEN-ANSWER"

export const questionsReducer = (state: InitialStateType = initialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case CHANGE_QUESTION_STATUS:
            return {
                ...state, questions: state.questions.map(question => question.id === action.payload.questionId
                    ? {...question, status: action.payload.status}
                    : question
                )
            }
        case FETCH_QUESTIONS:
            return {...state, questions: [...action.payload.questions,]}
        case SAVE_CHOSEN_ANSWER:
            return {
                ...state, questions: state.questions.map(el => el.id === action.payload.questionId
                    ? {...el, chosen: action.payload.answerId}
                    : el)
            }
        default:
            return state
    }
}

export const changeQuestionStatus = (questionId: number, status: QuestionStatusType) => {
    return {
        type: CHANGE_QUESTION_STATUS,
        payload: {
            questionId,
            status
        }
    } as const
}

export const fetchQuestions = (questions: QuestionType[]) => {
    return {
        type: FETCH_QUESTIONS,
        payload: {
            questions
        }
    } as const
}

export const saveChosenAnswer = (questionId: number, answerId: Nullable<number>) => {
    return {
        type: SAVE_CHOSEN_ANSWER,
        payload: {
            questionId,
            answerId
        }
    } as const

}
type ActionsType = ReturnType<typeof changeQuestionStatus>
    | ReturnType<typeof fetchQuestions>
    | ReturnType<typeof saveChosenAnswer>