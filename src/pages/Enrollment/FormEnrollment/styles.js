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
  }

  #price {
    width: 180px;
  }
`;

export const selectStyle = {
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    height: '45px',
    marginTop: '8px',
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
