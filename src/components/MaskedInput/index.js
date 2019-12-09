import React, { useRef, useEffect, useState } from 'react';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import CurrencyInput from 'react-currency-input';

export default function MaskedInput({ name, label, defaultValue, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, error } = useField(name);
  const [valueMasked, setValueMasked] = useState(defaultValue || '');

  const handleMask = value => {
    setValueMasked(value);
  };

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
      clearValue: selectRef => {
        selectRef.select.clearValue();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <CurrencyInput
        name={fieldName}
        value={valueMasked}
        onChange={handleMask}
        ref={ref}
        {...rest}
      />

      {error && <span>{error}</span>}
    </>
  );
}

MaskedInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultValue: PropTypes.string,
};

MaskedInput.defaultProps = {
  label: '',
  defaultValue: '',
};
