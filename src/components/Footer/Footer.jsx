import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "../Features/Link/Link";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="iconDiv">
        <Link
          href="https://www.facebook.com/shlomo.gangul.3/"
          content={<FacebookIcon fontSize="large" />}
        />

        <Link
          href="https://www.instagram.com/shlomo_gangul/"
          content={<InstagramIcon fontSize="large" />}
        />

        <Link
          href="https://www.linkedin.com/in/shlomo-gangul/"
          content={<LinkedInIcon fontSize="large" />}
        />

        <Link
          href="https://github.com/SlumpG"
          content={<GitHubIcon fontSize="large" />}
        />
      </div>
    </div>
  );
};

export default Footer;
