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
  background: #efeeee;

  .logo {
    text-align: center;
    color: #016dba;
    font-size: 18px;
  }

  @media ${device.tablet} {
  .logo {
    font-size: 25px;
  }
  }
`
export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
        </StyledHeader>
    );
};

