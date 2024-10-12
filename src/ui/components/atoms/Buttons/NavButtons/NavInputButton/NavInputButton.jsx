import styles from './NavInputButton.module.css';

export const NavInputButton = ({ img }) => {
  return (
    <button
      className={styles.btn}
    >
      <img src={img} alt={'circle'}/>
    </button>
  );
};