import './App.css'
import {StartPage} from "./components/start-page/StartPage";
import styled from "styled-components";
import {Provider} from "react-redux";
import {store} from "./app/store";
import {Route, Routes} from "react-router-dom";
import QuestionContainer from "./components/question-page/QuestionContainer";
import Header from "./components/Header";
import ResultPage from "./components/result-page/ResultPage";

const StyledApp = styled.div`
  min-height: 100vh;

`

function App() {

    return (
        <Provider store={store}>
            <StyledApp>
                <Header/>
                <Routes>
                    // todo fix routing
                    <Route path={"/"} element={<StartPage/>}/>
                    <Route path={"test"} element={<QuestionContainer/>}/>
                    <Route path={"result"} element={<ResultPage/>}/>
                </Routes>
            </StyledApp>

        </Provider>
    )
}

export default App
