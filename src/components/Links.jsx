import "../App.css"
import  Insta from "../assets/insta.svg"
import Face from "../assets/face.svg"
import Net from "../assets/net.svg"
import TG from "../assets/tg.svg"
import Git from "../assets/githyb.svg"

import React from 'react'

const Links = () => {
  return (
    <div>
          <div>
        <label htmlFor="">Linklar</label>
      <div className="links">
        <a href="#"><img src={Net} alt="" /></a>
        <a href="#"><img src={Insta} alt="" /></a>
        <a href="#"><img src={TG} alt="" /></a>
        <a href="#"><img src={Face} alt="" /></a>
        <a href="#"><img src={Git} alt="" /></a>
    
      </div>
    </div>
    
    
    </div>
  )
}

export default Links
