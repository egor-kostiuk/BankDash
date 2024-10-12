import styles from './SettingsSaveButton.module.css';

export const SettingsSaveButton = ({ onClick, label }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      {label}
    </button>
  )
}