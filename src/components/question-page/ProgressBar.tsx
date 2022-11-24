import React, {FC, useState} from 'react';
import styled from "styled-components";
import {StatusType} from "../../features/test-simulator/questions-slice";
import {useAppSelector} from "../../app/hooks";


type StepDotPropsType = {
    setCur: (cur: number) => void
    // todo fix type
    id: any
    status: StatusType
}

const StyledDot = styled.div<StepDotPropsType>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: lightgray;
  
  ${props => props.status === "right" && `
    background-color: green;
  `}
  ${props => props.status === "wrong" && `
    background-color: red;
  `}
  ${props => props.status === "idle" && `
  
    background-color: white;
    border: 1px solid blue;
  `}
`


const StepDot: FC<StepDotPropsType> = (props) => {
    return (
        <StyledDot onClick={() => props.setCur(props.id)}
                   {...props}
        />
    )
}

const StyledStepper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
export const Stepper = () => {
    const [cur, setCur] = useState(1)
    const questions = useAppSelector(state => state.questions.questions)

    return (
        <StyledStepper>

            {`${cur} из ${questions.length}`}

            {questions.map(dot => <StepDot key={dot.id}
                                    id={dot.id}
                                    setCur={setCur}
                                    status={dot.status}/>)}

        </StyledStepper>
    )
}