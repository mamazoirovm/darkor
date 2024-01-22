import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    country: '',
    livingPlace: '',
    employeeCount: '',
    comment: '',
  });

  useEffect(() => {
   
    const savedData = JSON.parse(localStorage.getItem('companyInfo'));

    if (savedData) {
      setProfileData(savedData);
    }
  }, []);

  return (
    <div>
      <div className='user'>
        <img src="" alt="" />
        <h1>Name: {profileData.name}</h1>
        <h1>Email: {profileData.email}</h1>
        <h1>Telefon raqami: {profileData.phoneNumber}</h1>
        <h1>Davlat: {profileData.country}</h1>
        <h1>Yashash joyi: {profileData.livingPlace}</h1>
        <h1>Hodimlar soni: {profileData.employeeCount}</h1>
        <p>Izoh: {profileData.comment}</p>
      </div>
    </div>
  );
}

export default Profile;
