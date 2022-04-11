import React from "react";
import Css_style from "./Home.module.css";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../DisplayWork/ReusuableCard/Card";
import Button from "../../DisplayWork/ReusuableBtn/Button";
const Home = () => {
  const stle = {
   color : "#669966",
   textDecoration : 'none',
   fontWeight : 'bold',
   marginLeft : "10px",
   fontSize : "20px"
  } 
  const navigate = useNavigate();
  const UserRegistration = () =>{
  navigate('/registration');
  }
  return (
  
    <div className={Css_style.cardCenter}>
      <Card title="Welcome to Dev Community">
      <p className={Css_style.pText}>
            We created this community for learn new skills and mentor nd speaker
            can guide here you can createown comunity and join our community
            House
          </p>
        <div>
          <Button onClick = {UserRegistration} label = "Create UserName" />
        </div>
        <div className={Css_style.SignIN}>
          <span>Have an invite text?</span>
          <Link style={stle} to="/login">Sign In</Link>
        </div>
</Card>
    </div>
  );
};
export default Home;
