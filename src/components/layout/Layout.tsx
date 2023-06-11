import React from 'react';
import styled from "styled-components";
import {Header} from "../Header";
import {Outlet} from "react-router-dom";
import {device} from "../../app/media-query";


const StyledLayout = styled.div`
  padding: 0;
  .wrapper {
    padding: 0 10px;
  }
  @media ${device.tablet} {
    .wrapper  {
      padding: 0 300px;
    }
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
