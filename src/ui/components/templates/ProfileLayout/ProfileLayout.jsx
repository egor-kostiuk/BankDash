import { useProfile } from '/src/hooks/useProfile.js';

export const ProfileLayout = ({ children }) => {
  const { userDetails } = useProfile();

  return (
    <>
      {userDetails ? (
        <>
        {children}
        </>
      ) : (
        <div></div>
      )}
    </>
  )
}