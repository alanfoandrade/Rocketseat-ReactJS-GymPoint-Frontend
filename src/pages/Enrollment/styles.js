import styled from 'styled-components';

export const Content = styled.div``;

export const EnrollmentTable = styled.table`
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
    border-bottom: 1px solid #eee;
    text-align: center;

    div {
      text-align: right;
    }
  }

  #student-title {
    width: 30%;
    text-align: left;
  }

  #name-student {
    text-align: left;
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
