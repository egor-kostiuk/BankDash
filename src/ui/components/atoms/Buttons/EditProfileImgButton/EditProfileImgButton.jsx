import { useEditProfileImg } from '/src/hooks/useEditProfileImg.js';
import { ReactSVG } from 'react-svg';
import editProfileImgButtonIcon from '/src/assets/img/edit-profile-img-button.svg';

import styles from './EditProfileImgButton.module.css';

export const EditProfileImgButton = () => {
  const { profileImg, handleButtonClick, handleImageChange, loading } = useEditProfileImg();

  return (
    <>
      <img src={profileImg} alt={'Profile Avatar'}/>
      <input
        type={'file'}
        accept={'image/*'}
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id={'fileInput'}
      />
      <button onClick={handleButtonClick} disabled={loading}>
        {loading ? (
          <svg viewBox="25 25 50 50" className={styles.loading}>
            <circle r="20" cy="50" cx="50" className={styles.circle}></circle>
          </svg>
        ) : (
          <ReactSVG src={editProfileImgButtonIcon}/>
        )}
      </button>
    </>
  );
};
