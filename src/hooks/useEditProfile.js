import { useState, useEffect } from 'react';
import { useProfile } from "/src/hooks/useProfile.js";

export const useEditProfile = () => {
  const { userDetails, updateProfileData } = useProfile();
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [country, setCountry] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleSave = async () => {
    try {
      const updatedData = {};

      if (lastName && lastName !== userDetails?.lastName) {
        updatedData.lastName = lastName;
      }
      if (profession && profession !== userDetails?.profession) {
        updatedData.profession = profession;
      }
      if (city && city !== userDetails?.city) {
        updatedData.city = city;
      }
      if (birthDate && birthDate !== userDetails?.birthDate) {
        updatedData.birthDate = birthDate;
      }
      if (country && country !== userDetails?.country) {
        updatedData.country = country;
      }
      if (postalCode && postalCode !== userDetails?.postalCode) {
        updatedData.postalCode = postalCode;
      }

      if (Object.keys(updatedData).length > 0) {
        await updateProfileData(updatedData);
        console.log("Profile successfully updated!");
      }
    } catch (error) {
      console.error("Error saving profile data:", error);
    }
  };

  useEffect(() => {
    if (userDetails) {
      setLastName(userDetails.lastName || '');
      setProfession(userDetails.profession || '');
      setCity(userDetails.city || '');
      setBirthDate(userDetails.birthDate || '');
      setCountry(userDetails.country || '');
      setPostalCode(userDetails.postalCode || '');
      setIsLoading(false);
    }
  }, [userDetails]);

  return {
    userDetails,
    setLastName,
    setProfession,
    setCity,
    setBirthDate,
    setCountry,
    setPostalCode,
    handleSave,
    isLoading
  };
};
