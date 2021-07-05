import { useState } from "react";
const header = {
  fullname: "Shlomo GanguL.",
  email: "shlomo.gangul1@gmail.com",
  img:"/portfolio/images/tech-logo.jpeg",
};
const home = {
  title: `Hi I'm Shlomo Gangul a Full Stack Developer`,
  aboutMeText: `A little about me, I like Video Games, Nature, I believe in hard work and dedication Inpm  love working with people because it open your mind to new ways to find solutions and a good coffee.
  Im looking for a place to imrove and learn more about development and ways to improve in code and in live `,
  images: {
    img1: "/portfolio/images/oklook1.jpeg",
    img2: "/portfolio/images/oklook2.jpeg",
    img3: "/portfolio/images/oklook3.jpeg",
  },
  cardText:'This is me giving a lecture with a few classmates to the class about JIT(just in time) compiling and the v8 engine by google that works on chorme',

  
};
const skills = {
  images: {
    img1: "/portfolio/images/html.jpeg",
    img2: "/portfolio/images/css.jpeg",
    img3: "/portfolio/images/jsBetter.jpeg",
    img4: "/portfolio/images/react.jpeg",
    img5: "/portfolio/images/bootstrap.jpeg",
    img6: "/portfolio/images/jQuery.jpeg",
    img7: "/portfolio/images/cSharp.jpeg",
    img8: "/portfolio/images/net-mvc.jpeg",
    img9: "/portfolio/images/js.jpeg",
    img10: "/portfolio/images/mongoDb.jpeg",
    img11: "/portfolio/images/sql-server.jpeg",
    img12: "/portfolio/images/usingexpress.png",
    img13: "/portfolio/images/api.jpg",
    img14: "/portfolio/images/ado-net.jpg",
    img15: "/portfolio/images/visaul-code.png",
    img16: "/portfolio/images/visaul-studio.png",
  },
  text:'Im hard working dedicated and open minded with a creative mind when it comes to finding solutions'
};
const portfolio = {  images:{
  img1:"/portfolio/images/portfolio1.PNG",
  img2:"/portfolio/images/portfolio2.PNG",
  img3:"/portfolio/images/portfolio3.jpeg",
}};
const contactMe = {images:{
  img1:"/portfolio/images/topSecret.gif",
  img2:"/portfolio/images/indi.jpeg"},
users:{}};
const theme={
  background:'black',
  color:'white',
} 

export function DATA() {
  const  [data, setData] = useState({ header, home, skills, portfolio, contactMe ,theme})
  return {data,setData}  
}

