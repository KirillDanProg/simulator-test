import './App.css'
import styled from "styled-components";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {Route, Routes} from "react-router-dom";

import {Header, QuestionContainer, ResultPage, StartPage} from "./components";

const StyledApp = styled.div`
  min-height: 100vh;
`

export const App = () => {
    return (
        <Provider store={store}>
            <StyledApp>
                <Header/>
                <Routes>
                    <Route path={"/"}  element={<StartPage/>}/>
                    <Route path={"test"} element={<QuestionContainer/>}/>
                    <Route path={"result"} element={<ResultPage/>}/>
                </Routes>
            </StyledApp>
        </Provider>
    )
}

