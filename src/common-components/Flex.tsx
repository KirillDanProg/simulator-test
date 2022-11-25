import React, {FC} from 'react';
import styled from "styled-components";

type FlexPropsType = {
    align?: string
    justify?: string
    gap?: string
    position?: string
    direction?: string
    children?: JSX.Element[] | JSX.Element
    padding?: string
    className?: string
}

const StyledFlex = styled.div<FlexPropsType>`
  display: flex;
  align-items: ${props => props.align || "center"};
  justify-content: ${props => props.justify || "center"};
  gap: ${props => props.gap || "0px"};
  direction: ${props => props.direction || "row"};
  padding: ${props => props.padding || "0"};
  ${props => props.position === "center" && `
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%)
  `}
  ${props => props.position === "top-left" && `
    position: absolute;
    top: 0;
    left: 0;
  `}
`

export const Flex: FC<FlexPropsType> = (props) => {
    return (
        <StyledFlex {...props}/>
    );
};

