import styled from 'styled-components';

export const Content = styled.div``;

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
    padding-right: 150px;
    text-align: center;
  }

  #age-student {
    padding-right: 150px;
    text-align: center;
  }

  div a {
    color: #4d85ee;
  }
  & a + a {
    margin-left: 23px;
    color: #de3b3b;
  }
`;
