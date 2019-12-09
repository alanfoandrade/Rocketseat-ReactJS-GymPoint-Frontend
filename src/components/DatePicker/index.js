import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import pt from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

export default function DatePicker({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  const handleSelected = date => {
    setSelected(date);
  };

  const DateButton = ({ value, onClick }) => (
    <button type="button" className="date-button" onClick={onClick}>
      {value}
    </button>
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        locale={pt}
        dateFormat="dd 'de' MMMM 'de' yyyy"
        placeholderText="Selecione uma data"
        onChange={handleSelected}
        customInput={<DateButton />}
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

DatePicker.defaultProps = {
  value: null,
  onClick: null,
};
