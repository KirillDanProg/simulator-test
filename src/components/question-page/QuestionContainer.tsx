import React, {useEffect, useState} from 'react';
import {BackToTestChoice} from "./BackToTestChoice";
import {AnswerVariant} from "./AnswerVariant";
import {Stepper} from "./ProgressBar";
import {StyledQuestionContainer} from "./StyledTestSimulator";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {Questions} from "../../features/test-simulator/Questions";
import {
    changeQuestionStatus,
    fetchQuestions,
    saveChosenAnswer
} from "../../features/test-simulator/questions-reducer";
import {useNavigate} from "react-router-dom";
import {Button, Container, Flex, Title} from "../../common-components";
import {Nullable} from "../../app/types";
import {Preloader} from "../../common-components/Preloader";

export const QuestionContainer = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [ansId, setAnsId] = useState<Nullable<number>>(null)
    const [currentCheckbox, setCurrentCheckbox] = useState<Nullable<number>>(null)
    const [questionId, setQuestionId] = useState(0)
    const testType = useAppSelector(state => state.app.testType)

    const questions = useAppSelector(state => state.questions.questions)
    const currentQuestion = questions[questionId]

    const answersKeys = currentQuestion && Object.keys(currentQuestion.possibleAnswers)

    const goToNextQuestion = (skip: string) => {
        // todo change condition
        setCurrentCheckbox(null)

        setQuestionId((state) => {
            if (state + 1 > questions.length - 1) {
                navigate("/result")
                return state
            } else {
                return state + 1
            }
        })
        if (skip) {
            dispatch(changeQuestionStatus(currentQuestion.id, "idle"))
            return
        }
        if (`${ansId}` === currentQuestion.rightAnswer) {
            dispatch(changeQuestionStatus(currentQuestion.id, "right"))
        } else if (`${ansId}` !== currentQuestion.rightAnswer) {
            dispatch(changeQuestionStatus(currentQuestion.id, "wrong"))
            dispatch(saveChosenAnswer(currentQuestion.id, ansId))
        }

    }


    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchQuestions(Questions))
        }, 1000)

    }, [])

    return (
        <Container width={"756px"}>
            {
                !currentQuestion
                    ? <Preloader/>
                    : <StyledQuestionContainer>

                        <BackToTestChoice/>
                        <Title type={testType}/>
                        <Stepper questionId={currentQuestion.id}/>

                        <div>
                            {currentQuestion.body}
                        </div>

                        <div>
                            {
                                answersKeys.map((el: string) => {
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
            }
        </Container>
    );
};
