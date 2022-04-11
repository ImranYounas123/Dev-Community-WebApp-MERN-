import React, { useState } from 'react'
import Css_style from './registration.module.css'

import UserPhoneOrEmail from '../ShowPeriorityPages/UserPhoneOrEmail/UserPhoneOrEmail'
import UserVerifyOTP from '../ShowPeriorityPages/UserVerifyOTP/UserVerifyOTP';
import Name from '../ShowPeriorityPages/Name/Name';
import UserProfileImage from '../ShowPeriorityPages/UserProfileImage/UserProfileImage';
import UserName from '../ShowPeriorityPages/UserName/UserName';

const PeriorityStep = {
    1 : UserPhoneOrEmail,
    2 : UserVerifyOTP,
    3 : Name,
    4 : UserProfileImage,
    5 : UserName
}
const Registration = () => {

  const onNext = () =>{
   setStep(step + 1);
  }
  
  // create component Step by step
  const [step, setStep] = useState(1);
  const Step = PeriorityStep[step];
  return (
    <div>
      <Step onNext={onNext}/>
    </div>
  )
}
export  default Registration