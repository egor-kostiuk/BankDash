import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import "./SettingsDateInput.css";

export const SettingsDateInput = ({ selectedDate, onChange, placeholder, dateFormat }) => {
  const maxDate = new Date();
  const minDate = new Date(1924, 0 , 1);

  return (
    <DatePicker
      className={'settings-date-input'}
      selected={selectedDate}
      onChange={onChange}
      placeholderText={placeholder}
      dateFormat={dateFormat}
      maxDate={maxDate}
      minDate={minDate}
      showYearDropdown
      yearDropdownItemNumber={100}
      scrollableYearDropdown
    />
  )
}