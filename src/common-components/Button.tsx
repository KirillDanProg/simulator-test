import styled from "styled-components";
import React, {FC} from "react";

export const StyledButton = styled.button<ButtonPropsType>`
  all: unset;
  padding: ${props => props.padding};
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  &:hover {
    transition: 0.3s;
    background-color: #1489ff;
    color: white;
  }
 &:active {
   background-color: #006aff;
 }
  ${props => props.variant === "outlined" && `
        color: #0066CC;
        border: 3px solid #0066CC;
    `}
  ${props => props.variant === "contained" && `
        color: white;
        background-color: #0066CC;
    `}
`

type ButtonPropsType = {
    color?: string
    variant?: string
    padding?: string
    children: | JSX.Element
        | JSX.Element[]
        | string
        | string[];
}

export const Button: FC<ButtonPropsType> = (props) => {
    return (
        <StyledButton {...props}/>
    )
}