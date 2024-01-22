import React from "react";
import Logo from "../assets/darkor.svg";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-item">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <ul>
          <li>Vakansiyalar</li>
          <li>Kandidatlar</li>
          <li>Kompaniyalar</li>
          <li>Xizmatlar</li>
          <li>Ta’lim</li>
          
          
        </ul>
        <div className="right">
          <select name="" id="">
            <option value="">UZB</option>
            <option value="">ENG</option>
            <option value="">RUS</option>
          </select>
          <button className="btn boshlash">Boshlash</button>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
