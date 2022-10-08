import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/tripleayt/image/upload/v1631555947/products/jpyibarlaxawvcvqjv5b.png"
              alt="Founder"
            />
            <Typography>Govardhan VP</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Github
            </Button>
            <span>
              This is a CapstoneProject made by Govardhan VP. Only with the
              purpose to learn  MERN Stack development
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
