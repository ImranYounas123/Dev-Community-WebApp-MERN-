import React from 'react'
import Css_style from './Card.module.css';
const Card = (title, Children) => {
  return (
<div className={Css_style.HomeCard}>
      <div className={Css_style.heading}>
        <h1>{title.title}</h1>
      </div>
      {Children}
    </div>
  )
}
export  default Card;