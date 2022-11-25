import styled from "styled-components";

export const StyledStartPage = styled.div`
  height: 100vh;

  h1, h2 {
    font-size: 22px;
    font-weight: 500;
    line-height: 25px;
    text-align: center;
    margin-top: 50px;
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
`