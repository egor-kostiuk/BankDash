import { useCurrency } from '/src/utils/CurrencyProvider/CurrencyContext.jsx';

export const CurrencyText = ({ children }) => {
  const { currencyValue, currencyIcon } = useCurrency();

  const value = parseFloat(children);

  if (isNaN(value)) {
    return <>{children}</>;
  }

  const formattedValue = (value * parseFloat(currencyValue)).toFixed(2);

  return <>{formattedValue + ` ${currencyIcon}`}</>;
}