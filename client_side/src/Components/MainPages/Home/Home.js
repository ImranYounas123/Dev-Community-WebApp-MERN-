import React from "react";
import Css_style from "./Home.module.css";
import {Link} from 'react-router-dom';
import Card from "../../DisplayWork/ReusuableCard/Card";
const Home = () => {
  return (
<div className={Css_style.cardCenter}>
  <Card title = "Welcome to Dev Community"></Card>
{/* <div className={Css_style.HomeCard}>
      <div className={Css_style.heading}>
        <h1>Welcome to Dev Community</h1>
      </div>
      <div>
        <p className={Css_style.pText}>
          We created this community for learn new skills and mentor nd speaker
          can guide here you can createown comunity and join our community House{" "}
        </p>
      </div>
      <div>
        <button>
          <span>Get Username to Continue</span>
          <img src="/assets/images/Arrow.png" alt="" />
        </button>
      </div>
      <div>
        <span>Have an invite text?</span>
        <Link to='/login'>Sign In</Link>
      </div>
    </div> */}
</div>
  );
};
export default Home;
