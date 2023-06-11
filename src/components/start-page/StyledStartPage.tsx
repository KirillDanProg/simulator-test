import styled from "styled-components";
import {device} from "../../app/media-query";

export const StyledStartPage = styled.div`
  .img {
    width: 90%;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
    box-shadow: 2px 2px 5px lightgray;
    border: 4px solid rgba(0, 0, 0, 0);
  }

  @media ${device.tablet} {
    .start-page-title {
      margin-top: 50px;
    }

    .imgContainer {
      width: 400px;
      height: 100%;
      overflow: hidden;
    }
  }
`
