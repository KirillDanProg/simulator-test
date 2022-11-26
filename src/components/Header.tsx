import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import {device} from "../app/media-query";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  background: #1D2126;
  
  @media ${device.tablet} {
    justify-content: start;
  }
`
export const Header = () => {
    return (
        <StyledHeader>
           <Logo/>
        </StyledHeader>
    );
};

