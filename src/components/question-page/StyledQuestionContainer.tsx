import React from 'react';
import styled from "styled-components";
import {device} from "../../app/media-query";

export const StyledQuestionContainer = styled.div<any>`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: ${props => props.gap || "45px"};
  
  @media ${device.tablet} {
    width: 500px;
    gap: 30px;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 15px;
    text-align: left;
  }


`
