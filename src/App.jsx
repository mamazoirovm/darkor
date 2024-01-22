import React from 'react'
import Navbar from './components/Navbar'
import Data from './components/Data'
import Form from './components/Form'
import Links from './components/Links'
import Select from './components/Select'
import Company from './components/Company'
import { useEffect } from 'react'
import { useState } from 'react'
import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Profile from './components/Profile'
const options = [
  { value: 'Oʻzbekiston', label: 'Oʻzbekiston' },
  { value: 'Qozogʻiston', label: 'Qozogʻiston' },
  { value: 'Rossiya', label: 'Rossiya' },
  { value: 'AQSh', label: 'Amerika Qoʻshma Shtatlari' },
  { value: 'Xitoy', label: 'Xitoy' },
  // Yana ko'p davlatlarni qo'shing
  { value: 'Braziliya', label: 'Braziliya' },
  { value: 'Hindiston', label: 'Hindiston' },
  { value: 'Germaniya', label: 'Germaniya' },
  { value: 'Fransiya', label: 'Fransiya' },
  { value: 'Yaponiya', label: 'Yaponiya' },
  { value: 'Avstraliya', label: 'Avstraliya' },
  { value: 'Tojikiston', label: 'Tojikiston' },
  { value: 'Turkmaniston', label: 'Turkmaniston' },
  { value: 'Qirgʻiziston', label: 'Qirgʻiziston' }
];

const App = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [img, setImg] = useState('');
  const [companyInfo, setCompanyInfo] = useState({
    companyName: '',
    email: '',
    phoneNumber: '',
    location: '',
    employeeCount: '',
    comment: '',
  });

  const [isValid, setIsValid] = useState({
    companyName: true,
    email: true,
    phoneNumber: true,
    location: true,
    employeeCount: true,
    comment: true,
  });

  useEffect(() => {
    const savedSelectedOption = JSON.parse(localStorage.getItem('selectedOption'));
    const savedImg = localStorage.getItem('img');
    const savedCompanyInfo = JSON.parse(localStorage.getItem('companyInfo'));

    if (savedSelectedOption) setSelectedOption(savedSelectedOption);
    if (savedImg) setImg(savedImg);
    if (savedCompanyInfo) setCompanyInfo(savedCompanyInfo);
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedOption', JSON.stringify(selectedOption));
    localStorage.setItem('img', img);
    localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
  }, [selectedOption, img, companyInfo]);

  const handleSelect = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleInputChange = (field, value) => {
    setCompanyInfo((prevInfo) => ({
      ...prevInfo,
      [field]: value,
    }));
  };

  const validateInputs = () => {
    const newIsValid = {};
    let isValidForm = true;

    for (const key in companyInfo) {
      const value = companyInfo[key];
      newIsValid[key] = !!value;

      if (!value) {
        isValidForm = false;
      }
    }

    setIsValid(newIsValid);

    return isValidForm;
  };

  const handleNextButtonClick = () => {
    const isValidForm = validateInputs();

    if (isValidForm) {
      localStorage.setItem('companyInfo', JSON.stringify(companyInfo));
      // Clear all inputs, selects, and img
      setSelectedOption(null);
      setImg('');
      setCompanyInfo({
        companyName: '',
        email: '',
        phoneNumber: '',
        location: '',
        employeeCount: '',
        comment: '',
      });

      alert("siz muvaffaqiyatli ro'yhatdan o'tding");
    } else {
      alert('Iltimos, hamma maydonlarni to\'ldiring');
    }
  };

  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/profile' element={Profile}> </Route>
        
      </Routes>
      </BrowserRouter>
      <Navbar />
      <div className="container">
        <Data img={img} setImg={setImg} />
        <Form
          companyName={companyInfo.companyName}
          email={companyInfo.email}
          phoneNumber={companyInfo.phoneNumber}
          onInputChange={handleInputChange}
          isValid={isValid}
        />
        <Links />
        <Select options={options} onSelect={handleSelect} selectedOption={selectedOption} />
        <Company
          location={companyInfo.location}
          employeeCount={companyInfo.employeeCount}
          comment={companyInfo.comment}
          onInputChange={handleInputChange}
          isValid={isValid}
          onNextButtonClick={handleNextButtonClick}
        />
      </div>
     
    </div>
  );
};


export default App
