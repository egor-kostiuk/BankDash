import {SettingsInputBox} from "/src/ui/components/molecules/SettingsInputBox/SettingsInputBox.jsx";

import "./SettingsEditProfile.css";

export const EditProfile = () => {
  return (
    <div className={'edit-profile-container'}>
      <div className={'edit-profile-img'}>
        <img src="/src/assets/img/navbar/profile.svg" alt="Profile Avatar"/>
      </div>
      <div className={'edit-profile-info'}>
        <ul className={'edit-profile-list'}>
          <SettingsInputBox
            title={'Your Name'}
            type={'text'}
            placeholder={'your name'}
          />
          <SettingsInputBox
            title={'Your Email'}
            type={'email'}
            placeholder={'your email'}
          />
          <SettingsInputBox
            title={'Date of Birth'}
            type={'text'}
            placeholder={'your birthday'}
          />
          <SettingsInputBox
            title={'Permanent Address'}
            type={'text'}
            placeholder={'your address'}
          />
          <SettingsInputBox
            title={'Postal Code'}
            type={'text'}
            placeholder={'your code'}
          />
        </ul>
        <ul className={'edit-profile-list'}>
          <SettingsInputBox
            title={'Last Name'}
            type={'text'}
            placeholder={'your last name'}
          />
          <SettingsInputBox
            title={'Password'}
            type={'password'}
            placeholder={'your password'}
          />
          <SettingsInputBox
            title={'Present address'}
            type={'text'}
            placeholder={'your address'}
          />
          <SettingsInputBox
            title={'City'}
            type={'text'}
            placeholder={'your city'}
          />
          <SettingsInputBox
            title={'Country'}
            type={'text'}
            placeholder={'your country'}
          />
        </ul>
      </div>
    </div>
  )
}