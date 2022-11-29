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
    id: number
}
export const ProgressBar: FC<StepperPropsType> = ({id}) => {

    const questions = useAppSelector(state => state.questions.questions)

    // +1 because of index of questions array starts with zero
    const questionId = id + 1

    return (
        <StyledProgressBar>
            {/* 2 вопрос из 14 */}
            <Wrapper>
                {`${questionId} из ${questions.length}`}
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