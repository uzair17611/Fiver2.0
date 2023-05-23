import React from 'react'
import "./Footer.scss"
import facebook from "../../public/img/facebook.png"
import accessibility from  "../../public/img/accessibility.png"
import instagram  from  '../../public/img/instagram.png'
import language from  '../../public/img/language.png'
import linkdin from  '../../public/img/linkedin.png'
import twitter from  "../../public/img/twitter.png"
import pinterest from "../../public/img/pinterest.png"
import coin from "../../public/img/coin.png"



const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="top">
          <div className="item">
            <h1>Catagories</h1>
            <span>graphic designing</span>
            <span>Marketing</span>
            <span>Business Anslyst</span>
            <span>Data science</span>

            <span> Web developer</span>
            <span>App developer</span>
            <span>Cyber security</span>
          </div>
          <div className="item">
            <h1>Catagories</h1>
            <span>graphic designing</span>
            <span>Marketing</span>
            <span>Business Anslyst</span>
            <span>Data science</span>

            <span> Web developer</span>
            <span>App developer</span>
            <span>Cyber security</span>

          </div>
          <div className="item">
            <h1>Catagories</h1>
            <span>graphic designing</span>
            <span>Marketing</span>
            <span>Business Anslyst</span>
            <span>Data science</span>

            <span> Web developer</span>
            <span>App developer</span>
            <span>Cyber security</span></div>
          <div className="item">
            <h1>Catagories</h1>
            <span>graphic designing</span>
            <span>Marketing</span>
            <span>Business Anslyst</span>
            <span>Data science</span>

            <span> Web developer</span>
            <span>App developer</span>
            <span>Cyber security</span>
          </div> 

          </div>
        <hr />
        
        <div className="bottom">
    
      <div className="left">
        <h2>Fiverr .</h2>
      <span>@ fiver   International Ltd .2023</span>

      </div>
       
       
        <div className="right">
        <div className="social">
       
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={linkdin} alt="" />
        <img src={twitter} alt="" />
        <img src={pinterest} alt="" />
        </div>
      
  
      <div className="link">
          <img src={language}alt="" />
          <span>language</span>
        </div>
        <div className="link">
          <img src={language}alt="" />
          <span>USD</span>
        </div>
          
        </div>

      </div>
</div>

    </div>
  )
}

export default Footer