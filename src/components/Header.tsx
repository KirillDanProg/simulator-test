import React from 'react';
import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  top: 0;
  width: 100%;
  height: 60px;
  background: #1D2126;
`
const Header = () => {
    return (
        <StyledHeader>
           <Logo/>
        </StyledHeader>
    );
};

export default Header;