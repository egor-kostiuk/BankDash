import { Children, cloneElement, isValidElement } from 'react';

import { useCurrency } from '/src/utils/CurrencyProvider/CurrencyContext.jsx';

export const CurrencyWrapper = ({ children }) => {
  const { currencyMultiplier } = useCurrency();

  const multiplyChildren = (child) => {
    if (typeof child === 'string' && !isNaN(parseFloat(child))) {
      return (parseFloat(child) * currencyMultiplier).toFixed(2);
    }

    if (isValidElement(child)) {
      return cloneElement(child, {
        children: Children.map(child.props.children, multiplyChildren),
      });
    }

    return child;
  };

  return <>{Children.map(children, multiplyChildren)}</>;
}