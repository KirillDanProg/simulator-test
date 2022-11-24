import React, {FC} from 'react';
import styled from "styled-components";

type ContainerPropsType = {
    width: string
    children: JSX.Element
}
export const StyledContainer = styled.div<ContainerPropsType>`
  position: relative;
  display: grid;
  place-items: center;
  width: ${props => props.width};
  min-height: calc(100vh - 70px);
  margin: 0 auto;
`

export const Container: FC<ContainerPropsType> = (props) => {
    return (
        <StyledContainer {...props}/>
    );
};

