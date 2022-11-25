import React, {FC, useState} from 'react';
import styled from "styled-components";
import {QuestionStatusType, QuestionType} from "../../features/test-simulator/questions-reducer";
import {Questions} from "../../features/test-simulator/Questions";
import {useAppSelector} from "../../app/hooks";


type StepDotPropsType = {
    setCur: (cur: number) => void
    // todo fix type
    id: any
    status: QuestionStatusType
}

const StyledDot = styled.div<StepDotPropsType>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #C4C4C466;


  ${props => props.status === "right" && `
    background-color: #3BB98A;
;
  `}
  ${props => props.status === "wrong" && `
    background-color: #CF6256;

  `}
  ${props => props.status === "current" && `
  
    background-color: white;
    border: 1px solid blue;
  `}
`


const qs: QuestionType[] = Questions

const StepDot: FC<StepDotPropsType> = (props) => {
    return (
        <StyledDot {...props}/>
    )
}

const StyledStepper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
type StepperPropsType = {
    questionIndex: number
}
export const Stepper: FC<StepperPropsType> = (props) => {

    const [cur, setCur] = useState(1)

    const questions = useAppSelector(state => state.questions.questions)

    return (
        <StyledStepper>

            {`${cur} из ${qs.length}`}

            {questions.map((dot: any) => <StepDot key={dot.id}
                                           id={dot.id}
                                           setCur={setCur}
                                           status={props.questionIndex === dot.id && "current" || dot.status}
            />)}

        </StyledStepper>
    )
}