import React, {FC} from 'react';
import styled from "styled-components";
import {useAppSelector} from "../../../app/hooks";
import {ProgressDot} from "./ProgressDot";
import {Wrapper} from "../../../common-components/Wrapper";

const StyledProgressBar = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
type StepperPropsType = {
    questionId: number
}
export const ProgressBar: FC<StepperPropsType> = ({questionId}) => {

    const questions = useAppSelector(state => state.questions.questions)

    return (
        <StyledProgressBar>
            {/* 2 вопрос из 14
            +1 because of arr index starts from zero */}
            <Wrapper>
                {`${questionId + 1} из ${questions.length}`}
            </Wrapper>

            {
                questions.map((dot) => <ProgressDot key={dot.id}
                                                    status={questionId === dot.id
                                                        ? "current"
                                                        : dot.status}/>)
            }
        </StyledProgressBar>
    )
}