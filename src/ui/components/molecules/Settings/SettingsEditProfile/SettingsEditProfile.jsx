import { useEditProfile } from "/src/hooks/useEditProfile.js";

import { SettingsInputBox } from "/src/ui/components/molecules/SettingsInputBox/SettingsInputBox.jsx";
import { SettingsSaveButton } from "/src/ui/components/atoms/Buttons/SettingsSaveButton/SettingsSaveButton.jsx";
import { EditProfileImgButton } from "/src/ui/components/atoms/Buttons/EditProfileImgButton/EditProfileImgButton.jsx";
import { SettingsChoseInputBox } from "/src/ui/components/molecules/SettingsChoseInputBox/SettingsChoseInputBox.jsx";
import { SettingsDateInputBox } from "/src/ui/components/molecules/SettingsDateInputBox/SettingsDateInputBox.jsx";

import "./SettingsEditProfile.css";

export const EditProfile = () => {
  const {
    userDetails,
    setLastName,
    setProfession,
    setCity,
    setBirthDate,
    setCountry,
    setPostalCode,
    handleSave,
    isLoading
  } = useEditProfile();

  if (isLoading) {
    return <div></div>;
  }

  // Converting Timestamp to date series in 'yyyy-MM-dd' format TODO: create hook
  const formatTimestampToDate = (timestamp) => {
    if (timestamp && timestamp.seconds) {
      const date = new Date(timestamp.seconds * 1000);
      return date.toISOString().split('T')[0];
    }
    return null;
  };

  const formattedBirthDate = formatTimestampToDate(userDetails?.birthDate);

  return (
    <div className={'edit-profile-container'}>
      <div className={'edit-profile-info-container'}>
        <div className={'edit-profile-img-box'}>
          <EditProfileImgButton/>
        </div>
        <div className={'edit-profile-info'}>
          <ul className={'edit-profile-list'}> {/* TODO: optimize inputs */}
            <SettingsInputBox
              title={'Your Name'}
              type={'text'}
              placeholder={userDetails?.firstName}
              readOnly={true}
              style={{cursor: 'default'}}
            />
            <SettingsInputBox
              title={'Last Name'}
              type={'text'}
              placeholder={userDetails?.lastName || 'enter your last name'}
              onChange={(e) => setLastName(e.target.value)}
            />
            <SettingsInputBox
              title={'Your Email'}
              type={'email'}
              placeholder={userDetails?.email}
              readOnly={true}
              style={{cursor: 'default'}}
            />
            <SettingsInputBox
              title={'Profession'}
              type={'text'}
              placeholder={userDetails?.profession || 'enter your profession'}
              onChange={(e) => setProfession(e.target.value)}
            />
            <SettingsInputBox
              title={'City'}
              type={'text'}
              placeholder={userDetails?.city || 'choose your city'}
              onChange={(e) => setCity(e.target.value)}
            />
            <SettingsChoseInputBox
              title={'Country'}
              placeholder={userDetails?.country || 'Choose Country'}
              setCountry={setCountry}
            />
            <SettingsDateInputBox
              title={'Date of Birth'}
              type={'date'}
              placeholder={formattedBirthDate || 'choose your birthday'}
              onChange={setBirthDate}
            />
            <SettingsInputBox
              title={'Postal Code'}
              type={'number'}
              placeholder={userDetails?.postalCode || 'enter your postal code'}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </ul>
        </div>
      </div>
      <SettingsSaveButton label={'Save'} onClick={handleSave}/>
    </div>
  )
}