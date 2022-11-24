import styled from "styled-components";

export const StyledStartPage = styled.div`
  height: 100vh;
  
  h1 {
    text-align: center;
    font-size: 22px;
    font-weight: 600;
    line-height: 25px;
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
`