import React, {FC} from 'react';
import styled from "styled-components";
import {device} from "../app/media-query";

type TitlePropsType = {
    type?: "front" | "back" | null
    value: string
    className?: string
}

const StyledTitle = styled.div`
  font-size: 18px;
  text-align: center;
  line-height: 25px;
  margin-bottom: 20px;
  font-weight: 500;
  
  @media ${device.tablet} {
    font-size: 22px;
    margin-bottom: 30px;
  }
  
`

export const Title: FC<TitlePropsType> = ({value, type, className, ...restProps}) => {
    return (
        <StyledTitle {...restProps}
                     className={className}
        >
            {value}
        </StyledTitle>
    );
};
