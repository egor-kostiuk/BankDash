import styles from './AuthInput.module.css';

export const AuthInput = ({ type, onChange, value, maxLength }) => {
  return (
    <input className={styles.input}
      type={type}
      onChange={onChange}
      value={value}
      maxLength={maxLength}/>
  )
}