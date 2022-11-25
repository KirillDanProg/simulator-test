import {
    AnyAction,
    applyMiddleware,
    combineReducers,
    compose,
    legacy_createStore,
    ThunkAction
} from "@reduxjs/toolkit";
import {questionsReducer} from "../features/test-simulator/questions-reducer";
import thunk from "redux-thunk";
import {appReducer} from "../features/test-simulator/app-reducer";

const rootReducer = combineReducers({
    questions: questionsReducer,
    app: appReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk),
));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = any> = ThunkAction<ReturnType,
    RootState,
    unknown,
    AnyAction>