import React from 'react';
import styled from "styled-components";
import {Header} from "../Header";
import {Outlet} from "react-router-dom";


const StyledLayout = styled.div`
  min-height: 100vh;
`
export const Layout = () => {
    return (
        <StyledLayout>
            <Header/>
            <Outlet/>
        </StyledLayout>
    );
};
