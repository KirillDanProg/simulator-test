import React from 'react';
import styled from "styled-components";
import {Checkbox} from "../../common-components/Checkbox";
import {Flex} from "../../common-components/Flex";


const StyledPossibleAnswer = styled.div`
  
`
export const AnswerVariant = (props: {id: number, cur: number, setCur: (cur: number) => void}) => {
    return (
        <Flex align={"center"} gap={"10px"}>
                <Checkbox id={props.id}
                          cur={props.cur}
                          setValue={props.setCur}/>
                <span>Использовать Array.prototype.push()</span>
        </Flex>
    );
};

