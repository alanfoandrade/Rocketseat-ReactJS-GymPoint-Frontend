import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Content = styled.div`
  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
  }

  form span {
    color: ${colors.watermelon};
    align-self: flex-start;
    font-weight: bold;
    opacity: 0.9;
    display: block;
    margin-top: 5px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  label {
    width: 25%;

    input {
      height: 45px;
      margin-top: 8px;
      color: #666;
      font-size: 16px;
      line-height: 1.25;
      padding: 0 15px;
      border-radius: 4px;
      border: solid 1px #dddddd;

      &::placeholder {
        color: #999999;
      }
    }

    div#date-input {
      height: 45px;
      margin-top: 8px;
      border-radius: 4px;
      border: 1px solid #dddddd;
      display: flex;
      align-items: center;

      &:hover {
        border: 1px solid ${colors.watermelon};
      }
    }

    .date-button {
      background: none;
      border: 0;
      color: #666;
      font-size: 16px;
      line-height: 1.25;
      padding: 0 15px;
    }
  }

  #price {
    width: 180px;
  }
`;
