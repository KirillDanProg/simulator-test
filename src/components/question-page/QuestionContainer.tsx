import React, {useEffect, useState} from 'react';
import {BackToTestChoice} from "./BackToTestChoice";
import {AnswerVariant} from "./AnswerVariant";
import {ProgressBar} from "./progress-bar/ProgressBar";
import {StyledQuestionContainer} from "./StyledQuestionContainer";
import { data } from '../../data'
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {
    changeQuestionStatus,
    fetchQuestions,
    saveChosenAnswer
} from "../../features/test-simulator/questions-reducer";
import {useNavigate} from "react-router-dom";
import {Button, Container, Flex, Title} from "../../common-components";
import {Nullable} from "../../app/types";
import {Preloader} from "../../common-components/Preloader";
import {Wrapper} from "../../common-components/Wrapper";
import {titleGenerator} from "../../utils/titleGenerator";

export const QuestionContainer = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [answerId, setAnswerId] = useState(-1)
    const [currentCheckbox, setCurrentCheckbox] = useState<Nullable<number>>(null)
    const [questionId, setQuestionId] = useState(1)

    const backFrontDirection = useAppSelector(state => state.app.testDirectionTitleValue)
    const testDirectionTitle = titleGenerator(backFrontDirection as string)

    const questions = useAppSelector(state => state.questions.questions)
    const currentQuestion = questions.filter(el => el.id === questionId)[0]

    const answersKeys = currentQuestion && Object.keys(currentQuestion.answers)

    const goToNextQuestion = (skip: string) => {
        setCurrentCheckbox(null)
        setAnswerId(-1)

        const nextQuestionId = questionId + 1
        if (nextQuestionId < questions.length) {
            setQuestionId(nextQuestionId)
        } else {
            navigate("/result")
        }

        if (skip) {
            dispatch(changeQuestionStatus(currentQuestion.id, "idle"))
            return
        }

        if (currentQuestion.answers[answerId] === currentQuestion.rightAnswer) {
            dispatch(changeQuestionStatus(currentQuestion.id, "right"))
        } else if (`${answerId}` !== currentQuestion.rightAnswer) {
            dispatch(changeQuestionStatus(currentQuestion.id, "wrong"))
            dispatch(saveChosenAnswer(currentQuestion.id, answerId))
        }

    }


    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchQuestions(data))
        }, 1000)

    }, [])

    return (
        <Container width={"756px"}>
            {
                !currentQuestion
                    ? <Preloader/>
                    : <StyledQuestionContainer>

                        {/*<BackToTestChoice/>*/}

                        <Title value={`Тест на интуицию`}/>

                        <ProgressBar id={questionId}/>

                            {/*Текст вопроса*/}
                           <p className='text'> {currentQuestion.question}</p>

                        <Wrapper>
                            {
                                answersKeys.map((el: string) => {
                                    return <AnswerVariant key={el}
                                                          answerId={+el}
                                                          setCurrentCheckbox={setCurrentCheckbox}
                                                          currentCheckbox={currentCheckbox}
                                                          answers={currentQuestion.answers}
                                                          selectAnswer={setAnswerId}
                                    />
                                })}
                        </Wrapper>

                        <Flex direction="row"
                              justify="space-between"
                              gap="5px">
                            <Button callback={() => goToNextQuestion("skip")}
                                    padding="6px 18px"
                                    variant="outlined">Пропустить вопрос
                            </Button>
                            <Button callback={() => goToNextQuestion("")}
                                    padding="6px 18px"
                                    variant="contained">Ответить
                            </Button>
                        </Flex>
                    </StyledQuestionContainer>
            }
        </Container>
    );
};
