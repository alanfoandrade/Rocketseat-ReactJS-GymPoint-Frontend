import styled from 'styled-components';

export const Content = styled.div``;

export const HelpOrderTable = styled.table`
  width: 100%;

  th {
    color: #444;
    text-align: left;
  }

  tr:last-child td {
    padding: 15px 0 0;
    border: none;
  }

  td {
    color: #666;
    font-size: 16px;
    line-height: 1.25;
    padding: 15px 0;
    border-bottom: 1px solid #eee;

    div {
      text-align: right;
    }
  }

  div a {
    color: #4d85ee;
  }
`;
