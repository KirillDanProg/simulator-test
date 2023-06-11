import React, {FC, ReactElement} from 'react';
import styled from "styled-components";
import {device} from "../app/media-query";

type ContainerPropsType = {
    width: string
    children: ReactElement | ReactElement[]
}
export const StyledContainer = styled.div<ContainerPropsType>`
  position: relative;
  display: grid;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  padding: 0 10px;
  place-content: center;
  @media ${device.tablet} {
    width: ${props => props.width};
  }
`

export const Container: FC<ContainerPropsType> = (props) => {
    return (
        <StyledContainer {...props}/>
    );
};

