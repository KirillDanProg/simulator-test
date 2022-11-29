import './App.css'
import {Provider} from "react-redux";
import {store} from "./app/store";
import {Route, Routes} from "react-router-dom";

import {QuestionContainer, ResultPage, StartPage} from "./components";
import {Layout} from "./components/layout/Layout";

export const App = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<StartPage/>}/>
                    <Route path={"test"} element={<QuestionContainer/>}/>
                    <Route path={"result"} element={<ResultPage/>}/>
                </Route>
            </Routes>
        </Provider>
    )
}
