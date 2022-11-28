import React, {FC} from "react";
import {QuestionStatusType} from "../../../features/test-simulator/questions-reducer";
import styled from "styled-components";

type ProgressDotPropsType = {
    status: QuestionStatusType
}
const StyledProgressDot = styled.div<ProgressDotPropsType>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #C4C4C466;

  ${props => props.status === "right" && `
    background-color: #3BB98A;
  `}
  
  ${props => props.status === "wrong" && `
    background-color: #CF6256;
  `}
  
  ${props => props.status === "current" && `
    background-color: white;
    border: 1px solid blue;
  `}
`
export const ProgressDot: FC<ProgressDotPropsType> = (props) => {
    return (
        <StyledProgressDot {...props}/>
    )
}