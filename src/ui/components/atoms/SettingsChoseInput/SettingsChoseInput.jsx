import { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

import './SettingsChoseInput.css';

export const SettingsChoseInput = ({ placeholder, onChange }) => {
  const [value, setValue] = useState('');
  const options = useMemo(() => countryList().getData(), []);

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