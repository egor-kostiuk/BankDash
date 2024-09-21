import { createContext, useContext } from 'react';

import { useEditProfile } from '/src/hooks/useEditProfile.js';
import currencyData from '/src/helpers/currencies.json';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children, currency }) => {
  const { userDetails } = useEditProfile();

  const currencyValue = currencyData.find(e => e.label.toLowerCase() === userDetails?.currency.toLowerCase())?.value || '1';
  const currencyIcon = userDetails?.currency.slice(-1); // TODO: optimize

  return (
    <CurrencyContext.Provider value={{ currency, currencyValue, currencyIcon }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}