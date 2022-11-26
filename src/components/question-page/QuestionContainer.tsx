import React, {useEffect, useState} from 'react';
import {BackToTestChoice} from "./BackToTestChoice";
import {AnswerVariant} from "./AnswerVariant";
import {Container} from "../../common-components/Container";
import {Button} from "../../common-components/Button";
import {Stepper} from "./ProgressBar";
import {StyledQuestionContainer} from "./StyledTestSimulator";
import {Flex} from "../../common-components/Flex";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Questions} from "../../features/test-simulator/Questions";
import {changeQuestionStatus, fetchQuestions, QuestionType} from "../../features/test-simulator/questions-reducer";
import Title from "../../common-components/Title";
import {useNavigate} from "react-router-dom";

export const QuestionContainer = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [currentCheckbox, setCurrentCheckbox] = useState<number | null>(null)
    const [questionId, setQuestionId] = useState(0)
    const [ansId, setAnsId] = useState<number | null>(null)

    const currentQuestion: QuestionType = Questions[questionId]
    // todo change condition
    if (currentQuestion === undefined) {
        navigate("/result")
    }
    const answersKeys = Object.keys(currentQuestion.possibleAnswers)

    const goToNextQuestion = (skip: string) => {

        setQuestionId((state) => state + 1)
        setCurrentCheckbox(null)

        if (skip) {
            dispatch(changeQuestionStatus(currentQuestion.id, "idle"))
            return
        }
        if (`${ansId}` === currentQuestion.rightAnswer) {
            dispatch(changeQuestionStatus(currentQuestion.id, "right"))
        } else if (`${ansId}` !== currentQuestion.rightAnswer) {
            dispatch(changeQuestionStatus(currentQuestion.id, "wrong"))
        }

    }

    const testType = useAppSelector(state => state.app.testType)

    useEffect(() => {
        dispatch(fetchQuestions(Questions))
    }, [])

    return (
        <Container width={"756px"}>
            <StyledQuestionContainer>

                <BackToTestChoice/>

                    <Title type={testType}/>

                    <Stepper questionId={currentQuestion.id}/>


                <div>
                    {currentQuestion.body}
                </div>

                <div>
                    {answersKeys.map((el: string) => {
                        return (
                            <AnswerVariant key={el}
                                           id={+el}
                                           setCurrentCheckbox={setCurrentCheckbox}
                                           currentCheckbox={currentCheckbox}
                                           ans={currentQuestion.possibleAnswers}
                                           selectAnswer={setAnsId}
                            />

                        )
                    })}
                </div>


                <Flex direction={"row"} justify={"space-between"} gap={"5px"}>
                    <Button callback={() => goToNextQuestion("skip")}
                            padding={"6px 18px"}
                            variant={"outlined"}>Пропустить вопрос</Button>
                    <Button callback={() => goToNextQuestion("")}
                            padding={"6px 18px"}
                            variant={"contained"}>Ответить</Button>
                </Flex>

            </StyledQuestionContainer>
        </Container>

    );
};


