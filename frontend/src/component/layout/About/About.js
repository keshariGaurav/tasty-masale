import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/gaurav_keshari__";
  };
  return (
    <div className='aboutSection'>
      <div></div>
      <div className='aboutSectionGradient'></div>
      <div className='aboutSectionContainer'>
        <Typography component='h1'>About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src='./gaurav.jpg'
              alt='Founder'
            />
            <Typography>Gaurav Keshari</Typography>
            <Button onClick={visitInstagram} color='primary'>
              Visit Instagram
            </Button>
            <span>
              I have strong analytical, collaborative, and communicative skills
              along with technical knowledge in software development, testing,
              deployment, and Dev Ops.
            </span>
          </div>
          <div className='aboutSectionContainer2'>
            <Typography component='h2'>My Social Profile</Typography>
            <a href='https://instagram.com/gaurav_keshari__' target='blank'>
              <InstagramIcon className='instagramSvgIcon' />
            </a>
            <a href='https://linkedin.com/kesharigaurav97' target='blank'>
              <LinkedInIcon className='instagramSvgIcon' />
            </a>
            <a
              href='https://www.facebook.com/gaurav.keshari.96387'
              target='blank'
            >
              <FacebookIcon className='instagramSvgIcon' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
