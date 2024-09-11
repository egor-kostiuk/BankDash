import { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list'

import './SettingsChoseInput.css';

export const SettingsChoseInput = ({ placeholder }) => {
  const [value, setValue] = useState('')
  const options = useMemo(() => countryList().getData(), [])

  const changeHandler = value => {
    setValue(value)
  }

  return <Select
    classNamePrefix={'country-select'}
    options={options}
    value={value}
    placeholder={placeholder}
    onChange={changeHandler}
    unstyled
  />
}