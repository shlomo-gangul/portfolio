import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="iconDiv">
        <a
          href="https://www.facebook.com/shlomo.gangul.3/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon fontSize="large" />
        </a>
        <a
          href="https://www.instagram.com/shlomo_gangul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <InstagramIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/shlomo-gangul/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
        <a
          href="https://github.com/SlumpG"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
