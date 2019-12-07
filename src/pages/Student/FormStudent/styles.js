import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Content = styled.div`
  h2 {
    font-size: 14px;
    color: #444;
  }

  #address-title {
    margin-top: 20px;
  }

  input {
    width: 100%;
    color: #666;
    font-size: 16px;
    line-height: 1.25;
    padding: 0 15px;
    margin-top: 8px;

    &::placeholder {
      color: #999999;
    }
  }

  div:last-child input {
    margin-bottom: 0;
  }

  form span {
    color: ${colors.watermelon};
    align-self: flex-start;
    font-weight: bold;
    opacity: 0.9;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  label {
    color: #444;
    font-size: 14px;
    font-weight: bold;
    width: 32%;
  }
`;