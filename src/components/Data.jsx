import React from "react";
import "../App.css";
import Elip from "../assets/elip.png";
import { useState, useRef } from "react";
import Form from "./Form";
const Data = () => {
  const inputRef = useRef(null);
  const [img, setImg] = useState("");

  const handleClickImg = () => {
    inputRef.current.click();
  };

  const handleImgChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImg(e.target.files[0]);
  };
  return (
    <div>
      <div className="conetnt">
        <div className="text">
          <h1>Kompaniya ma’lumotlari</h1>
          <p>Kompaniya haqidagi ma’lumotlarni kiriting</p>
        </div>
        <div className="img-to">
          {img ? (
            <img className="profile" src={URL.createObjectURL(img)} alt="" />
          ) : (
            <img className="profile" src={Elip} alt="" />
          )}

          <input
            type="file"
            ref={inputRef}
            onChange={handleImgChange}
            placeholder="upload to"
            style={{ display: "none" }}
          />
          <span onClick={handleClickImg} className="yukla">
            Yuklash
          </span>
        </div>
        
      </div>
    </div>
  );
};

export default Data;
