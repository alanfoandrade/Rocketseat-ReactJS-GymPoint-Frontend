import styled from 'styled-components';

import { Modal } from '@material-ui/core';
import colors from '../../styles/colors';

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

  div button {
    font-size: 15px;
    border: 0;
    background: none;
    color: #4d85ee;
  }
`;

export const AnswerModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;

  .answer-modal {
    width: 450px;
    background-color: #fff;
    border-radius: 4px;
    padding: 30px;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: left;

    label {
      color: #444;
      font-size: 14px;
      font-weight: bold;
    }
    p + label {
      margin: 20px 0 8px;
    }

    p {
      color: #666;
      font-size: 16px;
      line-height: 1.25;
      margin-top: 8px;
    }

    #answer-form {
      display: flex;
      flex-direction: column;

      textarea {
        height: 150px;
        resize: none;
        padding: 15px;
        border-radius: 4px;
        border: solid 1px #ddd;
        font-size: 16px;
        color: #666;

        &::placeholder {
          color: #999;
        }
      }

      span {
        color: ${colors.watermelon};
        align-self: flex-start;
        font-weight: bold;
        opacity: 0.9;
        display: block;
        margin-top: 5px;
      }

      button {
        font-size: 16px;
        font-weight: bold;
        height: 45px;
        margin-top: 20px;
        border-radius: 4px;
        border: 0;
        color: #fff;
        background-color: ${colors.watermelon};
      }
    }
  }
`;
