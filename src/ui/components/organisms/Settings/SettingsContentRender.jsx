import { EditProfile } from "/src/ui/components/molecules/Settings/SettingsEditProfile/SettingsEditProfile.jsx";
// import
// import

export const SettingsContentRender = ({ activeContent }) => {
  switch (activeContent) {
    case 'profile':
      return <EditProfile/>;
    case 'preferences':
      return <div>Preferences content</div>;
    case 'security':
      return <div>Security content</div>;
    default:
      return <div>default</div>;
  }
};