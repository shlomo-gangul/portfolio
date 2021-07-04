import React from "react";
import useData from "../../../Context/Context";
import GitHubIcon from "@material-ui/icons/GitHub";
import "./portfolio.css";

const Portfolio = () => {
  const images = useData().data.portfolio.images;

  return (
    <div className="portfolio">
      <h1>My Work</h1>
      <div>
        <div className="imgDiv2">
          <img src={images.img3} alt="" />
          <div className="textDiv2">
            <a
              href="https://slumpg.github.io/Fake-Site"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ color: "white" }} />
            </a>
            <p>
              An example lending page for a company 
            </p>
          </div>
        </div>
        </div>
      <div>
        <div className="imgDiv2">
          <img src={images.img1} alt="" />
          <div className="textDiv2">
            <a
              href="https://slumpg.github.io/KAPARA/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ color: "white" }} />
            </a>
            <p>
              Kapra is a way of living and this is a site made for kaparas
              around the world to come and learn about the kapara way
            </p>
          </div>
        </div>
        <div className="imgDiv2">
          <img src={images.img2} alt="" />
          <div className="textDiv2">
            <a
              href="https://github.com/SlumpG/movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon style={{ color: "white" }} />
            </a>
            <p>same as any other movie site</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
