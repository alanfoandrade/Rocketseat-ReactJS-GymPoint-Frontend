import { createGlobalStyle } from 'styled-components';

import { darken } from 'polished';

import colors from './colors';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

// import 'react-perfect-scrollbar/dist/css/styles.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

*:focus{
  outline:0;
}

html, body, #root {
  height: 100%;
  background: #f5f5f5;
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

div.react-confirm-alert-overlay {
  background: rgba(0,0,0,0.5);
}

div.react-confirm-alert-body {
  width: 450px;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  color: #666;
  font-size: 16px;
  line-height: 1.25;

  h1 {
    color: #444;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
}

div.react-confirm-alert-button-group{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    height: 36px;
    width: 80px;
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
  }
}

div.react-datepicker__day--selected {
    background-color: ${colors.watermelon};
    transition: background 0.2s;
    opacity:0.9;

    &:hover {
      background: ${darken(0.1, `${colors.watermelon}`)};
    }
  }
`;

export const selectStyle = {
  control: (styles, state) => ({
    ...styles,
    backgroundColor: 'white',
    height: '45px',
    marginTop: '8px',
    border: `1px solid #ddd`,
    boxShadow: state.isFocused && `1px solid #ddd`,
    '&:hover': {
      border: `1px solid ${colors.watermelon}`,
    },
  }),

  option: (styles, { isFocused, isSelected }) => ({
    ...styles,
    backgroundColor: isFocused ? '#ccc' : 'white',
    color: '#666',
    cursor: 'pointer',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '1.25',

    ':active': {
      ...styles[':active'],
      backgroundColor: isSelected || `${colors.watermelon}`,
      color: '#fff',
    },
  }),

  input: styles => ({
    ...styles,
    height: '30px',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '1.25',
    paddingLeft: '8px',
    display: 'flex',
    alignItems: 'center',
  }),

  placeholder: styles => ({
    ...styles,
    color: '#999',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '1.25',
    paddingLeft: '8px',
  }),

  singleValue: styles => ({
    ...styles,
    color: '#666',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '1.25',
  }),
};
