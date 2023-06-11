import React from 'react';
import styled from "styled-components";
import {Header} from "../Header";
import {Outlet} from "react-router-dom";


const StyledLayout = styled.div`
  //min-height: 100vh;

  .wrapper  {
    padding: 0 300px;
  }
`
export const Layout = () => {
    return (
        <StyledLayout>
            <Header/>
            <div className='wrapper'>
                <Outlet/>
            </div>
        </StyledLayout>
    );
};
