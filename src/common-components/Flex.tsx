import React, {FC} from 'react';
import styled from "styled-components";

type FlexPropsType = {
    align?: string
    justify?: string
    gap?: string
    children?: JSX.Element[] | JSX.Element
}

const StyledFlex = styled.div<FlexPropsType>`
  display: flex;
  align-items: ${props => props.align || "center"};
  justify-content: ${props => props.justify || "center"};
  gap: ${props => props.gap || "0px"};
`

export const Flex: FC<FlexPropsType> = (props) => {
    return (
        <StyledFlex {...props}/>
    );
};

