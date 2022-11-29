import styled from "styled-components";

export const StyledTable = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);

  table {
    border-collapse: collapse;
  }

  th, td {
    padding: 15px;
    border: 0.5px solid #E5E5E5;
    border-collapse: collapse;
  }

  thead {
    background: #E5E5E5;
  }

  tbody {
    tr {
      text-align: start;

      .td-ans {
        display: flex;
        gap: 10px;
      }

      .td-id {
        text-align: center;
      }
    }
  }
`
