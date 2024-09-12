import { useState, useMemo, useEffect } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import './SettingsChoseInput.css';

export const SettingsChoseInput = ({ placeholder, onChange, selectedValue }) => {
  const [value, setValue] = useState(null);
  const options = useMemo(() => countryList().getData(), []);

  useEffect(() => {
    if (selectedValue) {
      const selectedOption = options.find(option => option.label === selectedValue);
      setValue(selectedOption);
    }
  }, [selectedValue, options]);

  const changeHandler = (selectedOption) => {
    setValue(selectedOption);
    onChange(selectedOption);
  };

  return (
    <Select
      classNamePrefix={'country-select'}
      options={options}
      value={value}
      placeholder={placeholder}
      onChange={changeHandler}
      unstyled
    />
  )
}