import React, {FC} from 'react';
import styled from "styled-components";

type TitlePropsType = {
    type?: "front" | "back" | null
    value: string
    className?: string
}

const StyledTitle = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 25px;
  text-align: center;
  margin-top: 30px;
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
