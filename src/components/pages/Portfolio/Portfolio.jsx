import React from "react";
import useData from "../../../Context/Context";
import GitHubIcon from "@material-ui/icons/GitHub";
import Link from "../../Features/Link/Link";
import "./portfolio.css";


const Portfolio = () => {
  const images = useData().data.data.portfolio.images;

  return (
    <div className="portfolio">
      <h1>My Work</h1>
      <div>
        <div className="imgDiv2">
          <img src={images.img3} alt="" />
          <div className="textDiv2">
           <Link
              href="https://slumpg.github.io/Fake-Site"
              content={<GitHubIcon style={{ color: "white" }} />}
            />
              
            
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
           <Link
              href="https://slumpg.github.io/KAPARA/"
            content={<GitHubIcon style={{ color: "white" }} />}
            />
            <p>
              Kapra is a way of living and this is a site made for kaparas
              around the world to come and learn about the kapara way
            </p>
          </div>
        </div>
        <div className="imgDiv2">
          <img src={images.img2} alt="" />
          <div className="textDiv2">
           <Link
              href="https://github.com/SlumpG/movies"
              content={<GitHubIcon style={{ color: "white" }} />}
            />
            <p>same as any other movie site</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
