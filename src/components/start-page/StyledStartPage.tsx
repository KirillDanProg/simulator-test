import styled from "styled-components";
import {device} from "../../app/media-query";

export const StyledStartPage = styled.div`
  height: calc(100vh - 120px);

  .imgContainer {
    height: 270px;
  }

  .img {
    width: 100%;
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
    .start-page-title {
      margin-top: 50px;
    }

    .imgContainer {
      width: 400px;
      height: 400px;
    }
  }
`