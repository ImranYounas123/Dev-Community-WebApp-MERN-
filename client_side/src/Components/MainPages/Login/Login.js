import React, { useState } from 'react'
// import Css_style from './registration.module.css'

import UserPhoneOrEmail from '../ShowPeriorityPages/UserPhoneOrEmail/UserPhoneOrEmail'
import UserVerifyOTP from '../ShowPeriorityPages/UserVerifyOTP/UserVerifyOTP';

const PeriorityStep = {
    1 : UserPhoneOrEmail,
    2 : UserVerifyOTP
}
const Login = () => {

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
export  default Login