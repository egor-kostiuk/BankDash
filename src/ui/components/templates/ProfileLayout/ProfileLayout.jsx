import { ProfileMain } from '/src/services/auth/ProfileMain.js';

export const ProfileLayout = ({ children }) => {
  const { userDetails } = ProfileMain();

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