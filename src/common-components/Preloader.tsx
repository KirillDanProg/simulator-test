import React from 'react';
import styled from "styled-components";


const StyledPreloader = styled.div`
  display: inline-block;
  width: 100px;
  height: 100px;
  
  &:after {
    content: "";
    display: block;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border: 6px solid;
    border-color: #80bfff transparent #80bfff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  &:before {
    content: "loading";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`
export const Preloader = () => {
    return (
        <StyledPreloader/>
    );
};

