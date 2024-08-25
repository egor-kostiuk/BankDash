import { useState, useEffect } from "react";

import { SettingsLabel } from "/src/ui/components/atoms/SettingsLabel/SettingsLabel.jsx";
import { SettingsChoseInput } from "/src/ui/components/atoms/SettingsChoseInput/SettingsChoseInput.jsx";
import { countryOptions } from "/src/helpers/countrysList.js";

import "./SettingsChoseInputBox.css";

export const SettingsChoseInputBox = ({ title, placeholder, setCountry }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(placeholder);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(countryOptions);

  useEffect(() => {
    setSelectedCountry(placeholder);
  }, [placeholder]);

  useEffect(() => {
    const filtered = countryOptions.filter(country =>
      country.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchTerm]);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country.label);
    setCountry(country.label);
    setDropdownVisible(false);
  };

  return (
    <div className={'settings-chose-input-box'}>
      <SettingsLabel title={title}/>
      <button onClick={toggleDropdown}>
        <SettingsChoseInput
          readOnly={true}
          placeholder={selectedCountry}
        />
      </button>

      <div className={'dropdown'}>
        {isDropdownVisible && (
          <div className={'dropdown-content'}>
            <div className={'dropdown-content-input-box'}>
              <input
                type="text"
                placeholder={'Enter country'}
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
                <li>There are no matching countries</li>
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
