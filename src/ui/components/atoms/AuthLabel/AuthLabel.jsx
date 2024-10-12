import styles from './AuthLabel.module.css';

export const AuthLabel = ({ type }) => {
  return (
    <label className={styles.label}>
      {type}
    </label>
  )
}