import { AuthLabel } from '/src/ui/components/atoms/AuthLabel/AuthLabel.jsx';
import { AuthInput } from '/src/ui/components/atoms/AuthInput/AuthInput.jsx';

import './AuthInputBox.css';

export const AuthInputBox = ({ type, onChange, value, maxLength }) => {
  const hasValue = value && value.length > 0;

  return (
    <div className={`input-box ${hasValue ? 'has-value' : ''}`}>
      <AuthInput
        type={type}
        onChange={onChange}
        value={value}
        maxLength={maxLength}/>
      <AuthLabel type={type}/>
    </div>
  )
}