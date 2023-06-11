import React, {FC} from 'react';
import styled from "styled-components";
import {device} from "../app/media-query";

type FlexPropsType = {
    align?: string
    justify?: string
    gap?: string
    position?: string
    direction?: string
    wrap?: string
    children?: JSX.Element[] | JSX.Element
    padding?: string
    className?: string
}

const StyledFlex = styled.div<FlexPropsType>`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "center"};
  align-items: ${props => props.align || "center"};
  text-align: center;
  gap: 15px;

  

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
  ${props => props.wrap === "wrap" && `
   flex-wrap: wrap;
  `}
  
  @media ${device.tablet} {
    display: flex;
    align-items: ${props => props.align || "center"};
    justify-content: ${props => props.justify || "center"};
    gap: ${props => props.gap || "0px"};
    flex-direction: row;
    padding: ${props => props.padding || "0"};

    .img {
      width: 100%;
    }
  }
`

export const Flex: FC<FlexPropsType> = (props) => {
    return (
        <StyledFlex {...props}/>
    );
};

