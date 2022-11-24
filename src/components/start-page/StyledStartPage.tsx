import styled from "styled-components";

export const StyledStartPage = styled.div`
  gap: 100px;

  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    line-height: 25px;
  }

  .img {
    max-width: 400px;
    margin: 100px;
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