import { useState } from "react";
import { SettingsLabel } from "/src/ui/components/atoms/SettingsLabel/SettingsLabel.jsx";
import { SettingsDateInput } from "/src/ui/components/atoms/SettingsDateInput/SettingsDateInput.jsx";

import "./SettingsDateInputBox.css";

export const SettingsDateInputBox = ({ title, placeholder, onChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <div className={'settings-date-input-box'}>
      <SettingsLabel title={title} />
      <SettingsDateInput
        selectedDate={selectedDate}
        onChange={handleDateChange}
        placeholder={selectedDate || placeholder}
        dateFormat={'yyyy/MM/dd'}
      />
    </div>
  )
}
