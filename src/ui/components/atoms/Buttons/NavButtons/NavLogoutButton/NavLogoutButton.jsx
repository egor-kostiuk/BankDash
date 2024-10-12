import styles from './NavLogoutButton.module.css';

export const NavLogoutButton = ({ label, onClick }) => {
  return (
    <button
      className={styles.btn}
      onClick={onClick}
    >
      {label}
    </button>
  );
};