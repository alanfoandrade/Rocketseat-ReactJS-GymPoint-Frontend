import styled from 'styled-components';

import colors from '../../styles/colors';

export const Content = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }
`;

export const BackButton = styled.button`
  height: 36px;
  border-radius: 4px;
  background-color: #ccc;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 10px 16px;
  margin-right: 16px;
`;
export const SaveButton = styled.button`
  height: 36px;
  border-radius: 4px;
  background-color: ${colors.watermelon};
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border: none;
  padding: 10px 16px;
`;
