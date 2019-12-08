import styled from 'styled-components';

export const StudentTable = styled.table`
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

  #name-title {
    width: 45%;
  }

  #email-title {
    width: 35%;
  }

  #age-title {
    width: 8%;
    padding-right: 80px;
    text-align: center;
  }

  #age-student {
    width: 8%;
    padding-right: 80px;
    text-align: center;
  }

  #options {
    width: 12%;
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
