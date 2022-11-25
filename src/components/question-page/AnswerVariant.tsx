import React, {FC} from 'react';
import styled from "styled-components";
import {Checkbox} from "../../common-components/Checkbox";
import {Flex} from "../../common-components/Flex";


const StyledPossibleAnswer = styled.div`
  margin-bottom: 20px;
  background-color: #fff;
  padding: 12px 50px;
  border-radius: 5px;
  box-shadow: 0 0 3px lightgray;
  cursor: pointer;
`
type AnswerPropsType = {
    id: number
    currentCheckbox: number | null
    setCurrentCheckbox: (cur: number | null) => void
    ans: {[key: string] : string }
    selectAnswer: (answerId: number | null) => void
}

export const AnswerVariant: FC<AnswerPropsType> = (props) => {

    const selectAnswerHandler = (answerId: number | null) => {
        props.selectAnswer(answerId)
        props.setCurrentCheckbox(answerId)
    }

    return (
        <div onClick={() => selectAnswerHandler(props.id)}>
            <StyledPossibleAnswer>
                <Flex justify={"start"} align={"center"} gap={"15px"}>
                    <Checkbox id={props.id}
                              cur={props.currentCheckbox}
                    />
                    <span>{props.ans[props.id]}</span>
                </Flex>
            </StyledPossibleAnswer>
        </div>


    );
};

