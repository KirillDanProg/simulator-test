import React, {FC} from 'react';
import styled from "styled-components";
import {Checkbox, Flex} from "../../common-components";
import {device} from "../../app/media-query";
import {Nullable} from "../../app/types";
import {Wrapper} from "../../common-components/Wrapper";


const StyledPossibleAnswer = styled.div`
  
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 3px lightgray;
  cursor: pointer;

  @media ${device.tablet} {
    margin-bottom: 20px;
    padding: 12px 50px;
  }

`
type AnswerPropsType = {
    answerId: number
    currentCheckbox: Nullable<number>
    setCurrentCheckbox: (cur: Nullable<number>) => void
    answers: { [key: string]: string }
    selectAnswer: (answerId: Nullable<number>) => void
}

export const AnswerVariant: FC<AnswerPropsType> = (props) => {

    const selectAnswerHandler = (answerId: Nullable<number>) => {
        props.selectAnswer(answerId)
        props.setCurrentCheckbox(answerId)
    }

    return (
        <Wrapper callback={() => selectAnswerHandler(props.answerId)}>
            <StyledPossibleAnswer>
                <Flex justify={"start"} align={"center"} gap={"15px"}>
                    <Checkbox id={props.answerId}
                              currentCheckbox={props.currentCheckbox}
                    />
                    <Wrapper>{props.answers[props.answerId]}</Wrapper>
                </Flex>
            </StyledPossibleAnswer>
        </Wrapper>


    );
};

