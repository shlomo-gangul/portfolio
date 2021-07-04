import React from "react";
import useData from "../../../Context/Context";
import "./Skills.css";


const Skills = () => {
    const images = useData().data.skills.images;
  return (
    <div className="skills">
      <h1>Skills</h1>
      <div className="flexItUp">
        <div>
          <ul>
            <h3>Client-Side</h3>
            <li>HTML
                <div className='imgDiver'>
                <img src={images.img1} alt="" />
                </div>
            </li>
            <li>CSS
            <div className='imgDiver'>
                <img src={images.img2} alt="" />
                </div>
            </li>
            <li>JavaScript
            <div className='imgDiver'>
                <img src={images.img3} alt="" />
                </div>
            </li>
            <li>React
            <div className='imgDiver'>
                <img src={images.img4} alt="" />
                </div>
            </li>
            <li>Bootstrap
            <div className='imgDiver'>
                <img src={images.img5} alt="" />
                </div>
            </li>
            <li>jQuery
            <div className='imgDiver'>
                <img src={images.img6} alt="" />
                </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>Server-Side</h3>
            <li>C#
            <div className='imgDiver'>
                <img src={images.img7} alt="" />
                </div>
            </li>
            <li>Asp.Net MVC
            <div className='imgDiver'>
                <img src={images.img8} alt="" />
                </div>
            </li>
            <li>Nodejs OOP
            <div className='imgDiver'>
                <img src={images.img9} alt="" />
                </div>
            </li>
            <li>Ado.Net
            <div className='imgDiver'>
                <img src={images.img14} alt="" />
                </div>
            </li>
            <li>API
            <div className='imgDiver'>
                <img src={images.img13} alt="" />
                </div>
            </li>
            <li>Using Express
            <div className='imgDiver'>
                <img src={images.img12} alt="" />
                </div></li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>DataBases</h3>
            <li>MONOGDB
            <div className='imgDiver'>
                <img src={images.img10} alt="" />
                </div>
            </li>
            <li>MSSQL
            <div className='imgDiver'>
                <img src={images.img11} alt="" />
                </div>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <h3>IDE</h3>
            <li>Visual studio code
              
            <div className='imgDiver'>
                <img src={images.img15} alt="" />
                </div>
            </li>
            <li>Visual studio
              
            <div className='imgDiver'>
                <img src={images.img16} alt="" />
                </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
