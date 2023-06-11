import styled from "styled-components";
import React, {FC} from "react";
import {device} from "../app/media-query";

export const StyledButton = styled.button<ButtonPropsType>`
  all: unset;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  width: fit-content;
  padding: 4px 12px;

  @media ${device.tablet} {
    padding: ${props => props.padding};
    ${props => props.className === 'start-btn' && `
        font-size: 30px;
        margin: 20px auto;
        display: block;
  `}
  }
  &:hover {
    transition: 0.3s;
    background-color: #1489ff;
    color: white;
  }

  &:active {
    background-color: #006aff;
  }
  ${props => props.className === 'start-btn' && `
        font-size: 24px;
        margin: 20px auto;
        display: block;
        
  `}
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
    className?: string
    callback: () => void
    color?: string
    variant?: string
    padding?: string
    children: | JSX.Element
        | JSX.Element[]
        | string
        | string[];
}

export const Button: FC<ButtonPropsType> = (props) => {
    const onClickHandler = () => {
        props.callback()
    }
    return (
        <StyledButton onClick={onClickHandler} {...props} />
    )
}
