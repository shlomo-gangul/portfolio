import { useState } from "react";
const header = {
  fullname: "Shlomo GanguL.",
  email: "shlomo.gangul1@gmail.com",
  img:"/images/tech-logo.jpeg",
};
const home = {
  title: `Hi I'm Shlomo Gangul a Full Stack Developer`,
  aboutMeText: `A little about me, I like Video Games, Nature and a good coffee`,
  images: {
    img1: "/images/oklook1.jpeg",
    img2: "/images/oklook2.jpeg",
    img3: "/images/oklook3.jpeg",
  },
  cardText:'This is me giving a lecture with a few classmates to the class about JIT(just in time) compiling and the v8 engine by google that works on chorme',

  
};
const skills = {
  images: {
    img1: "/images/html.jpeg",
    img2: "/images/css.jpeg",
    img3: "/images/jsBetter.jpeg",
    img4: "/images/react.jpeg",
    img5: "/images/bootstrap.jpeg",
    img6: "/images/jQuery.jpeg",
    img7: "/images/cSharp.jpeg",
    img8: "/images/net-mvc.jpeg",
    img9: "/images/js.jpeg",
    img10: "/images/mongoDb.jpeg",
    img11: "/images/sql-server.jpeg",
    img12: "/images/usingexpress.png",
    img13: "/images/api.jpg",
    img14: "/images/ado-net.jpg",
    img15: "/images/visaul-code.png",
    img16: "/images/visaul-studio.png",
  }
};
const portfolio = {  images:{
  img1:"/images/portfolio1.PNG",
  img2:"/images/portfolio2.PNG",
  img3:"/images/portfolio3.jpeg",
}};
const contactMe = {images:{
  img1:"/images/topSecret.gif",},
users:{}};
export function DATA() {
  const  [data, setData] = useState({ header, home, skills, portfolio, contactMe })
  return {data,setData}  
}

