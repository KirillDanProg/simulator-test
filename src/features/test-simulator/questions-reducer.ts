import {Nullable} from "../../app/types";
import {QuestionsAction} from "./ActionConstants";

export type QuestionType = {
    id: number
    answers: string[]
    question: string
    rightAnswer: string
    status: QuestionStatusType
    chosenAnswer?: Nullable<number>
}
export type QuestionStatusType = "right" | "wrong" | "current" | "idle"

type PossibleAnswersType = { [key: string]: string }

type InitialStateType = {
    questions: QuestionType[]
}
const initialStateType = {
    questions: []
}

export const questionsReducer = (state: InitialStateType = initialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case QuestionsAction.CHANGE_QUESTION_STATUS:
            return {
                ...state, questions: state.questions.map(question => question.id === action.payload.questionId
                    ? {...question, status: action.payload.status}
                    : question
                )
            }

        case QuestionsAction.FETCH_QUESTIONS:
            return {...state, questions: [...action.payload.questions,]}

        case QuestionsAction.SAVE_CHOSEN_ANSWER:
            return {
                ...state, questions: state.questions.map(el => el.id === action.payload.questionId
                    ? {...el, chosenAnswer: action.payload.answerId}
                    : el)
            }
        default:
            return state
    }
}

export const changeQuestionStatus = (questionId: number, status: QuestionStatusType) => {
    return {
        type: QuestionsAction.CHANGE_QUESTION_STATUS,
        payload: {
            questionId,
            status
        }
    } as const
}

export const fetchQuestions = (questions: QuestionType[]) => {
    return {
        type: QuestionsAction.FETCH_QUESTIONS,
        payload: {
            questions
        }
    } as const
}

export const saveChosenAnswer = (questionId: number, answerId: Nullable<number>) => {
    return {
        type: QuestionsAction.SAVE_CHOSEN_ANSWER,
        payload: {
            questionId,
            answerId
        }
    } as const

}
type ActionsType = ReturnType<typeof changeQuestionStatus>
    | ReturnType<typeof fetchQuestions>
    | ReturnType<typeof saveChosenAnswer>


// import {createSlice, PayloadAction} from '@reduxjs/toolkit';
//
// interface Question {
//     id: number;
//     status: string;
//     chosenAnswer: string | null;
// }
//
// interface InitialStateType {
//     questions: Question[];
// }
//
// const initialState: InitialStateType = {
//     questions: []
// };
//
// const questionsSlice = createSlice({
//     name: 'questions',
//     initialState,
//     reducers: {
//         changeQuestionStatus: (state, action: PayloadAction<{ questionId: number, status: string }>) => {
//             state.questions[action.payload.questionId].status = action.payload.status
//         },
//         fetchQuestions: (state, action: PayloadAction<{ questions: Question[] }>) => {
//             state.questions = action.payload.questions;
//         },
//         saveChosenAnswer: (state, action: PayloadAction<{ questionId: number, answerId: string }>) => {
//             state.questions[action.payload.questionId].chosenAnswer = action.payload.answerId
//         }
//     }
// });
//
// export const {changeQuestionStatus, fetchQuestions, saveChosenAnswer} = questionsSlice.actions;
//
// export default questionsSlice.reducer;
