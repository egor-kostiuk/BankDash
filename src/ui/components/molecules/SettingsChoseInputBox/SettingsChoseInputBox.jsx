import { useState, useEffect } from "react";

import { SettingsLabel } from "/src/ui/components/atoms/SettingsLabel/SettingsLabel.jsx";
import { SettingsChoseInput } from "/src/ui/components/atoms/SettingsChoseInput/SettingsChoseInput.jsx";
import { countryOptions } from "/src/helpers/countrysList.js";

import "./SettingsChoseInputBox.css";

export const SettingsChoseInputBox = ({ title, placeholder, setCountry }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(placeholder);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCountries = countryOptions.filter(country =>
    country.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setSelectedCountry(placeholder);
  }, [placeholder]);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.label);
    setCountry(country.label);
    setSearchTerm('');
    setDropdownVisible(false);
  };

  return (
    <div className={'settings-chose-input-box'}>
      <SettingsLabel title={title}/>
      <button onClick={toggleDropdown}>
        <SettingsChoseInput readOnly={true} placeholder={selectedCountry} />
      </button>
      {isDropdownVisible && (
        <div className={'dropdown'}>
          <div className={'dropdown-content'}>
            <div className={'dropdown-content-input-box'}>
              <input
                type={'text'}
                placeholder={'Enter country'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <span></span>
            </div>
            <ul className={'dropdown-countries-list'}>
              {filteredCountries.length > 0 ? (
                filteredCountries.map((country) => (
                  <li key={country.value} onClick={() => handleCountrySelect(country)}>
                    {country.label}
                  </li>
                ))
              ) : (
                <li>No matching countries</li>
              )}
            </ul>
          </div>
        </div>
      )}
      {isDropdownVisible && <div className={'dropdown-overlay'} onClick={() => setDropdownVisible(false)} ></div>}
    </div>
  )
}
