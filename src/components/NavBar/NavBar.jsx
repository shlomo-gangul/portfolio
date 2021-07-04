import React from "react";
import useData from "../../Context/Context";
import Link from "../Features/Link/Link";
import "./NavBar.css";

const NavBar = () => {
  const fullname = useData().data.header.fullname;
  const email = useData().data.header.email;
  const img = useData().data.header.img;
  return (
    <div className="NavBar">
      <div>
        <h6>{email}</h6>
        <h1>{fullname}</h1>
      </div>
      <div>
        <Link
          href="https://tech-career-alternative.firebaseapp.com/"
          content={<img src={img} alt="" />}
        />
      </div>
    </div>
  );
};

export default NavBar;
