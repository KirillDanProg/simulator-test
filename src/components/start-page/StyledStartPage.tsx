import styled from "styled-components";
import {device} from "../../app/media-query";

export const StyledStartPage = styled.div`
  height: calc(100vh - 120px);
  

  h1, h2 {
    font-size: 22px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    margin-top: 30px;
  }

  .img {
    max-width: 400px;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 5px lightgray;
    border: 4px solid rgba(0, 0, 0, 0);

    &:hover {
      transition: 0.3s;
      opacity: 0.7;
      background-color: blue;
      border: 4px solid dodgerblue;
    }

    &:active {
      opacity: 1;
    }
  }
  @media ${device.tablet} {
    h1, h2 {
      margin-top: 50px;
    }
  }
`