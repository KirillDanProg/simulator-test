import React, {FC} from 'react';
import styled from "styled-components";

type ContainerPropsType = {
    width: string
    children: JSX.Element
}
export const StyledContainer = styled.div<ContainerPropsType>`
  width: ${props => props.width};
  margin: 0 auto;
`

export const Container: FC<ContainerPropsType> = (props) => {
    return (
        <StyledContainer {...props}/>
    );
};

