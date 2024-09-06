import { useProfile } from "/src/hooks/useProfile.js";

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