import styled from 'styled-components';

import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.div`
  min-width: ${props => (props.largeList ? '1100px' : '900px')};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #444;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const BackButton = styled.button`
  display: ${props => (props.visible ? 'flex' : 'none')};
  height: 36px;
  border-radius: 4px;
  background-color: #ccc;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 0 16px;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.07, `#ccc`)};
  }

  svg {
    margin-right: 8px;
  }
`;

export const SaveButton = styled.button`
  display: ${props => (props.visible ? 'flex' : 'none')};
  height: 36px;
  border-radius: 4px;
  background-color: ${colors.watermelon};
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border: none;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.07, `${colors.watermelon}`)};
  }

  svg {
    margin-right: 8px;
  }
`;

export const AddButton = styled.button`
  display: ${props => (props.visible ? 'flex' : 'none')};
  height: 36px;
  border-radius: 4px;
  background-color: ${colors.watermelon};
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border: none;
  padding: 0 16px;
  margin-right: 16px;
  transition: background 0.2s;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${darken(0.07, `${colors.watermelon}`)};
  }

  svg {
    margin-right: 8px;
  }
`;

export const SearchBox = styled.div`
  position: relative;

  input {
    display: ${props => (props.visible ? 'flex' : 'none')};
    flex: 1;
    width: 240px;
    height: 36px;
    border-radius: 4px;
    border: solid 1px #dddddd;
    font-size: 14px;
    padding: 10px 16px 10px 35px;
    color: #666666;

    &::placeholder {
      color: #999999;
    }
  }
`;

export const SearchButton = styled.button`
  display: ${props => (props.visible ? 'flex' : 'none')};
  background: none;
  border: 0;
  align-items: center;

  svg {
    color: #999999;
    position: absolute;
    left: 10px;
  }
`;
