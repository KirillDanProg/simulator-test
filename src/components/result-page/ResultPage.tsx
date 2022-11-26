import React from 'react';
import {Container} from "../../common-components/Container";
import {Flex} from "../../common-components/Flex";
import {useAppSelector} from "../../app/hooks";
import Title from "../../common-components/Title";
import {ProgressScale} from "./ProgressScale";
import styled from "styled-components";
import {WrongAnsTable} from "./WrongAnsTable";


const StyledResultPage = styled.div`
  .title {
    width: 90%;
    margin: 0 auto;
    font-size: 22px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;

    &.positioned {
      position: relative;
      top: 30px;
      z-index: 2;
    }
  }

  .result {
    color: gray;
  }

  .result-container {
    width: 100%;
    gap: 20px;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 5px 20px rgba(29, 33, 38, 0.03), 0 1px 2px rgba(29, 33, 38, 0.1);
  }

  .result-title {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: start;
  }
`
export const ResultPage = () => {
    const testType = useAppSelector(state => state.app.testType)
    const questions = useAppSelector(state => state.questions.questions)
    const rightQuestions = questions.filter(el => el.status === "right").length
    const result = 100 / questions.length * rightQuestions

    return (
        <StyledResultPage>

            <Title className={"title positioned"} type={testType}/>

            <Container width={"756px"}>

                <Flex direction={"column"} justify={"center"} className={"result-container"}>

                    <ProgressScale value={result}/>

                    <div className={"result-title"}>
                        <Title className={"title"} value={"Ваш результат теста"}/>
                        <div className={"result"}>

                            {
                                `Вы ответили на ${rightQuestions > 0 ? rightQuestions : "0"} из ${questions.length}`
                            }
                        </div>
                    </div>
                </Flex>
                    <WrongAnsTable/>
            </Container>
        </StyledResultPage>
    );
};
