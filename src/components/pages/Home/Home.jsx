import React from "react";
import useData from "../../../Context/Context";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import StarIcon from "@material-ui/icons/Star";
import "react-vertical-timeline-component/style.min.css";
import "./Home.css";

const Home = () => {
  const title = useData().data.home.title;
  const aboutMeText = useData().data.home.aboutMeText;
  const images = useData().data.home.images;
  const cardText = useData().data.home.cardText;
  console.log(images);
  return (
    <div className="Home">
      <h1 className="homeH1">{title}</h1>
      <p className="homeP">{aboutMeText}</p>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.5)",
            color: "#000",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "#5C8D89", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="sideCard">
            <div className="imgDiv">
              <img src={images.img1} alt="" />
            </div>
            <div className="textDiv">
              <p>{cardText}</p>
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.5)",
            color: "#000",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "#5C8D89", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <div className="sideCard">
            <div className="textDiv">
              <p>{cardText}</p>
            </div>
            <div className="imgDiv">
              <img src={images.img2} alt="" />
            </div>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(0, 0, 0, 0.5)",
            color: "#000",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "#5C8D89", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <div className="sideCard">
            <div className="imgDiv">
              <img src={images.img3} alt="" />
            </div>
            <div className="textDiv">
              <p>{cardText}</p>
            </div>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#5C8D89", color: "#fff" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default Home;
