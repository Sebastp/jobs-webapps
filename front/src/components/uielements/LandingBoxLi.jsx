import React from 'react'
import { Link } from 'react-router-dom'


const LandingBoxLi = ({title, description}) => (
  <div className="col-4 landing__boxDescs__li">
    <img src={require('../../assets/img/icons/Box_Icon.svg')} className="landing__boxDescs__li__icon" alt="Icon"/>
    <h4 className="landing__boxDescs__li__title">{title}</h4>
    <p className="landing__boxDescs__li__desc">{description}</p>
  </div>
)


export default LandingBoxLi
