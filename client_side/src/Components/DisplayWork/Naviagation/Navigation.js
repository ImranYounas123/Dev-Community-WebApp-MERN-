import React from "react";
import { Link } from "react-router-dom";
import Css_Styel from './Navigation.module.css';
const Navigation = () => {
    const style = {
    width : "250px",
    heigh : "250px"
    }
  return (
    <nav className={`${Css_Styel.nav} main-container`}>
      {/* '/'=> this slash will point public folder */}
      <Link to="/" >
        <img style={style} src="/assets/images/logo.png" alt="" />
      </Link>
    </nav>
  );
};
export default Navigation;
