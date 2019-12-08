import React, { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import AsyncSelect from 'react-select/async';

import { selectStyle } from '../../styles/global';
import { loadStudentRequest } from '../../store/modules/student/actions';

export default function ReactAsyncSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const [optionSelected, setOptionSelected] = useState(
    defaultValue && defaultValue.id
  );

  function handleSelected(option) {
    setOptionSelected(option.id);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  function getDefaultValue() {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  }

  const dispatch = useDispatch();

  const getStudent = inputValue => {
    const prov = options.filter(i =>
      i.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    return prov;
  };

  const promiseOptions = inputValue =>
    new Promise(resolve => {
      dispatch(loadStudentRequest(1, inputValue));

      resolve(getStudent(inputValue));
    });

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <AsyncSelect
        name={fieldName}
        aria-label={fieldName}
        defaultOptions={options}
        loadOptions={promiseOptions}
        defaultValue={getDefaultValue()}
        onInputChange={promiseOptions}
        selected={optionSelected}
        cacheOptions
        getOptionValue={option => option.id}
        getOptionLabel={option => option.name}
        onChange={handleSelected}
        styles={selectStyle}
        ref={ref}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

ReactAsyncSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
};

ReactAsyncSelect.defaultProps = {
  label: '',
  multiple: false,
};
