import React from 'react'
import Css_style from './Button.module.css';
 const Button = ({label,onClick}) => {
  return (
    <button onClick={onClick} className={Css_style.btn}>
            <span>{label}</span>
            <img src="/assets/images/Arrow.png" alt="" />
          </button>
  )
}
export default Button;
