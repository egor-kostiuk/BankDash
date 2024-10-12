import styles from './AuthButton.module.css';

export const AuthButton = ({ onClick, label }) => {
  return (
    <button className={styles.btn} onClick={onClick}>
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {label}
      </div>
    </button>
  )
}