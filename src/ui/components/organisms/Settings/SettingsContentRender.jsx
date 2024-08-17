// import
// import
// import

export const SettingsContentRender = ({activeContent}) => {
  switch (activeContent) {
    case 'profile':
      return <div>Profile content</div>;
    case 'preferences':
      return <div>Preferences content</div>;
    case 'security':
      return <div>Security content</div>;
    default:
      return <div>default</div>;
  }
};