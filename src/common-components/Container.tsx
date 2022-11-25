import React, {FC} from 'react';
import styled from "styled-components";
import {device} from "../app/media-query";

type ContainerPropsType = {
    width: string
    children: JSX.Element
}
export const StyledContainer = styled.div<ContainerPropsType>`
  position: relative;
  display: grid;
  min-height: calc(100vh - 70px);
  margin: 0 auto;
  padding: 0 10px;

  @media ${device.tablet} {
    place-items: center;
    width: ${props => props.width};
  }
`

export const Container: FC<ContainerPropsType> = (props) => {
    return (
        <StyledContainer {...props}/>
    );
};

