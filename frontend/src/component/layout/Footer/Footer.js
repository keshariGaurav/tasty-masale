import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import logo from "../../../images/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='leftFooter'>
        <img src={logo} alt='logo' />
      </div>

      <div className='midFooter'>
        <h1>Tasty Masale</h1>
        <p>Include spoonful magic to your food</p>

        <p>Copyrights 2022 &copy; Gaurav Keshari</p>
      </div>

      <div className='rightFooter'>
        <h4>Follow Me</h4>
        <a href='http://instagram.com/gaurav_keshari__'>Instagram</a>
        <a href='http://facebook.com/gaurav_keshari__'>Facebook</a>
        <a href='https://www.linkedin.com/in/gaurav-keshari-87aa11200/'>
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
