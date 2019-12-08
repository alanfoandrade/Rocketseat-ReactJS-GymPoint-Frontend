import styled from 'styled-components';

export const PlanTable = styled.table`
  width: 100%;

  th {
    color: #444;
    text-align: center;
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
    text-align: center;
    border-bottom: 1px solid #eee;

    div {
      text-align: right;
    }
  }

  #plan-title {
    text-align: left;
    width: 30%;
  }

  #plan-name {
    text-align: left;
  }

  #length-title {
    width: 30%;
  }

  #options {
    width: 20%;
  }

  div {
    display: flex;
    justify-content: flex-end;

    button {
      border: 0;
      background: none;
      font-size: 16px;
      color: #4d85ee;
    }
    & button + button {
      border: 0;
      background: none;
      margin-left: 23px;
      font-size: 16px;
      color: #de3b3b;
    }
  }
`;
