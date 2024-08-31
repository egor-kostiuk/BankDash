import { useProfile } from "/src/hooks/useProfile.js";

import "./Profile.css";

export const Profile = ({ children }) => {
  const {userDetails} = useProfile();

  return (
    <div>
      {userDetails ? (
        <>
        {children}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}