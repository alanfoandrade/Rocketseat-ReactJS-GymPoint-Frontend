import styled from 'styled-components';

import { Form } from '@rocketseat/unform';

import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.div`
  min-width: ${props => (props.largeList ? '1200px' : '900px')};
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

  aside {
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

export const SearchBox = styled(Form)`
  display: ${props => (props.visible ? 'flex' : 'none')};
  height: 36px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
  margin-left: 16px;

  div {
    display: flex;
    align-items: center;
    background: none;
    border: 0;
  }

  input {
    margin-left: 5px;
    border: 0;
    font-size: 14px;
    color: #666666;

    &::placeholder {
      color: #999999;
    }
  }
`;
