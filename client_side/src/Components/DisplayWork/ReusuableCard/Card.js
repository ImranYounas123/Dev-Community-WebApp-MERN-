import React from 'react'
import Css_style from './Card.module.css';
const Card = ({title, children}) => {
  return (
<div className={Css_style.HomeCard}>
      <div className={Css_style.heading}>
        <h1>{title}</h1>
      </div>
      {children}
     </div>
 
 )
}
export  default Card;