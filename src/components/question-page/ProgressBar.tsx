import React, {FC} from 'react';
import styled from "styled-components";
import {QuestionStatusType} from "../../features/test-simulator/questions-reducer";
import {useAppSelector} from "../../app/hooks";


type StepDotPropsType = {
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
    questionId: number
}
export const Stepper: FC<StepperPropsType> = ({questionId}) => {


    const questions = useAppSelector(state => state.questions.questions)

    return (
        <StyledStepper>
            {/* 2 вопрос из 14 */}
            {`${questionId} из ${questions.length}`}

            {
                questions.map((dot) => <StepDot key={dot.id}
                                                status={
                                                    questionId === dot.id
                                                        ? "current"
                                                        : dot.status}/>)
            }

        </StyledStepper>
    )
}