import React, { useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import Select from 'react-select';
import PropTypes from 'prop-types';

export default function ReactSelect({
  name,
  label,
  options,
  multiple,
  ...rest
}) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const parseSelectValue = selectRef => {
    const selectValue = selectRef.state.value;
    if (!multiple) {
      return selectValue ? selectValue.id : '';
    }

    return selectValue ? selectValue.map(option => option.id) : [];
  };

  const getDefaultValue = () => {
    if (!defaultValue) return null;

    if (!multiple) {
      return options.find(option => option.id === defaultValue);
    }

    return options.filter(option => defaultValue.includes(option.id));
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <Select
        name={fieldName}
        aria-label={fieldName}
        options={options}
        isMulti={multiple}
        defaultValue={getDefaultValue}
        getOptionValue={option => option.id}
        getOptionLabel={option => option.title}
        ref={ref}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

ReactSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  multiple: PropTypes.bool,
};

ReactSelect.defaultProps = {
  label: '',
  multiple: false,
};
