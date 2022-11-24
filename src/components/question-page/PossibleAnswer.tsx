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
`
type AnswerPropsType = {
    id: number
    cur: number
    setCur: (cur: number) => void
    children: string
}

export const AnswerVariant: FC<AnswerPropsType> = (props) => {
    return (
        <StyledPossibleAnswer>
            <Flex justify={"start"} align={"center"} gap={"15px"}>
                <Checkbox id={props.id}
                          cur={props.cur}
                          setValue={props.setCur}/>
                <span>Использовать Array.prototype.push()</span>
            </Flex>
        </StyledPossibleAnswer>

    );
};

