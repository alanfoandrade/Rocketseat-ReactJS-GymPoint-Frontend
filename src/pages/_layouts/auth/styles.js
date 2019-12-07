import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${colors.watermelon};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
`;

export const Container = styled.div`
  width: 360px;
  min-height: 450px;
  background: #ffffff;
  border-radius: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 153px;
    height: 100px;
    margin: 20px 0 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      color: #444;
      font-size: 14px;
      font-weight: bold;
      margin-top: 15px;
    }

    input {
      width: 100%;
      height: 45px;
      border-radius: 4px;
      border: solid 1px #dddddd;
      font-size: 16px;
      color: #666666;
      margin-top: 8px;
      padding: 13px 15px;

      &::placeholder {
        color: #999999;
      }
    }

    span {
      color: ${colors.watermelon};
      align-self: flex-start;
      margin-top: 6px;
      font-weight: bold;
      opacity: 0.9;
      display: block;
      margin-top: 5px;
    }

    button {
      margin-top: 15px;
      height: 45px;
      border-radius: 4px;
      background-color: ${colors.watermelon};
      border: none;
      color: #ffffff;
      font-size: 16px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, `${colors.watermelon}`)};
      }
    }
  }
`;
